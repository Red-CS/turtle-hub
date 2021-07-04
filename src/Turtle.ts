export class Turtle {
  id: number = 0;
  label: string = "";
  fuel: number = 0;
  ws: WebSocket;

  constructor(label: string) {
    this.label = label;
    this.ws = new WebSocket("ws://localhost:8080");

    this.ws.onopen = () => {
      this.ws.send("Test Server");
    };

    this.ws.onmessage = (e) => {
      console.log(e.data);
    };
  }

  forward() {
    this.ws.send("Move Forward()");
  }
}
