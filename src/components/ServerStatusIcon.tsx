import styles from "./styles/ServerStatusIcon.module.css";
import { useState, useEffect } from "react";

// IpcRenderer communicates with backend
const { ipcRenderer } = window.require("electron");

/** Component for the bottom right icon indicating the state of the Server */
const ServerStatusIcon = () => {
  // Manages the state of the server in renderer process
  const [serverState, setServerState] = useState<boolean>(false);

  // Handles setting the server state to trigger visual change
  useEffect(() => {
    //@ts-ignore
    ipcRenderer.once("server-status", (_event, arg: boolean) => {
      console.log(arg);
      setServerState(arg);
    });
  }, [serverState]);

  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles["server-icon"]}
      onClick={() => {
        // Toggle the server
        ipcRenderer.send("start-server");
      }}
    >
      <circle cx="28" cy="28" r="28" fill="#1E1E1E" />
      <path
        className={styles.path}
        d="M40.7215 19.2687L29.2785 12.6629C28.8898 12.4385 28.4489 12.3203 28 12.3203C27.5511 12.3203 27.1102 12.4385 26.7215 12.6629L15.2785 19.2687C14.8896 19.4932 14.5666 19.8163 14.3422 20.2053C14.1177 20.5944 13.9997 21.0357 14 21.4848V25.5335C14 25.7596 14.0898 25.9764 14.2497 26.1362C14.4095 26.2961 14.6263 26.3859 14.8524 26.3859C15.0784 26.3859 15.2952 26.2961 15.4551 26.1362C15.6149 25.9764 15.7047 25.7596 15.7047 25.5335V21.9792L20.5291 24.7621C20.5248 24.8402 20.5248 24.9185 20.5291 24.9965V30.4431L15.2785 27.4258C15.149 27.351 15.0021 27.3116 14.8526 27.3116C14.703 27.3115 14.5561 27.3508 14.4266 27.4255C14.297 27.5002 14.1894 27.6077 14.1145 27.7372C14.0396 27.8666 14.0002 28.0135 14 28.163V34.6964C13.9997 35.1455 14.1177 35.5868 14.3422 35.9758C14.5666 36.3649 14.8896 36.6879 15.2785 36.9125L26.7215 43.5183C27.1102 43.7427 27.5511 43.8609 28 43.8609C28.4489 43.8609 28.8898 43.7427 29.2785 43.5183L40.7215 36.9125C41.1104 36.6879 41.4334 36.3649 41.6578 35.9758C41.8823 35.5868 42.0003 35.1455 42 34.6964V21.4848C42.0003 21.0357 41.8823 20.5944 41.6578 20.2053C41.4334 19.8163 41.1104 19.4932 40.7215 19.2687V19.2687ZM20.512 37.9652L16.1309 35.4337C16.0015 35.3589 15.8939 35.2515 15.8191 35.1221C15.7443 34.9927 15.7049 34.8459 15.7047 34.6964V29.6376L20.512 32.4121V37.9652ZM27.5738 14.1417C27.7034 14.0669 27.8504 14.0275 28 14.0275C28.1496 14.0275 28.2966 14.0669 28.4262 14.1417L32.8073 16.669L28 19.4434L23.1927 16.669L27.5738 14.1417ZM21.3814 23.2833L16.5571 20.5003L21.488 17.6535L26.2953 20.4194L21.5775 23.1512L21.3814 23.2833ZM27.1476 21.9067V27.609L22.2167 30.4474V24.9965C22.2172 24.9222 22.2371 24.8492 22.2745 24.7849C22.3119 24.7206 22.3654 24.6672 22.4298 24.63L27.1476 21.9067ZM27.1476 41.7923L22.2167 38.9497V33.4093L26.9346 36.1198C27.0025 36.1612 27.0737 36.1969 27.1476 36.2264V41.7923ZM27.7869 34.6452L23.0734 31.9262L28 29.0836L32.9266 31.9262L28.2131 34.6452C28.1483 34.6826 28.0748 34.7023 28 34.7023C27.9252 34.7023 27.8517 34.6826 27.7869 34.6452ZM33.7833 38.9497L28.8524 41.7923V36.2264C28.9263 36.1969 28.9975 36.1612 29.0654 36.1198L33.7833 33.3965V38.9497ZM33.7833 30.4261L28.8524 27.609V21.9067L33.5702 24.63C33.6346 24.6672 33.6881 24.7206 33.7255 24.7849C33.7629 24.8492 33.7828 24.9222 33.7833 24.9965V30.4261ZM34.4225 23.1299L29.7047 20.4194L34.512 17.6449L39.4429 20.4918L34.6186 23.2833L34.4225 23.1299ZM40.2953 34.6964C40.2951 34.8459 40.2557 34.9927 40.1809 35.1221C40.1061 35.2515 39.9985 35.3589 39.8691 35.4337L35.488 37.9652V32.4248L39.004 30.3962C39.2001 30.2832 39.3432 30.0969 39.402 29.8783C39.4607 29.6597 39.4302 29.4267 39.3172 29.2306C39.2042 29.0345 39.0179 28.8913 38.7993 28.8326C38.5807 28.7739 38.3477 28.8044 38.1516 28.9174L35.488 30.4559V24.9965C35.4922 24.9185 35.4922 24.8402 35.488 24.7621L40.3123 21.9792L40.2953 34.6964Z"
        fill="white"
        style={{
          animation: serverState ? "var(--animation)" : "none"
        }}
      />
    </svg>
  );
};

export default ServerStatusIcon;
