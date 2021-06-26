import copyImg from "../../assets/images/copy.svg";

import "./styles.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <div className="room-code">
      <div onClick={copyRoomCodeToClipboard}>
        <img src={copyImg} alt="Ícone de cópia do botão código da sala" />
      </div>
      <span>sala #{props.code}</span>
    </div>
  );
}
