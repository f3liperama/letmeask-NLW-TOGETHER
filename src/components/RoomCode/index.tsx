import copyImg from "../../assets/images/copy.svg";

import { Container } from './styles';

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <Container>
      <div onClick={copyRoomCodeToClipboard}>
        <img src={copyImg} alt="Ícone de cópia do botão código da sala" />
      </div>
      <span>sala #{props.code}</span>
    </Container>
  );
}
