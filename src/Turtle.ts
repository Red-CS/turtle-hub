export class Turtle {
  id: number = 0;
  label: string = "";
  fuel: number = 0;
  ws: WebSocket;
  isConnected: boolean = false;

  constructor(label: string) {
    this.label = label;
    this.ws = new WebSocket("ws://localhost:8080");
    this.connect().then(() => {
      console.log("Connected! isConnected is", this.ws.OPEN);
    });
  }

  async connect() {
    this.ws.onopen = () => {
      this.isConnected = true;
      this.ws.send("Move Forward()");
    };

    this.ws.onmessage = (e) => {
      console.log(e.data);
    };
    return;
  }

  async execute(command: string) {
    if (!this.isConnected) {
      console.log("Can't send, not connnected yet");
      return;
    }

    switch (command) {
      case "forward":
        this.ws.send("Move forward()");
        break;

      default:
        this.ws.send("Move anywhere()");
    }
  }

  async forward() {}
}
