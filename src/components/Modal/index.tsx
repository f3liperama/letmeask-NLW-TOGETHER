import { Container, ModalContainer, ModalHeader, ModalContent } from "./styles";

import CloseImg from "../../assets/images/close.svg";

type ModalProps = {
  title: string;
  content: string;
  textCancelButton?: string;
  textSubmitButton?: string;
  active?: boolean;
  onCancel: () => void;
  onSubmit: () => void;
};

export function Modal({
  title,
  content,
  textCancelButton = "Cancelar",
  textSubmitButton = "Confirmar",
  active = false,
  onCancel,
  onSubmit,
}: ModalProps) {
  return (
    <Container className={active ? "active" : ""}>
      <ModalContainer>
        <ModalHeader>
          <img src={CloseImg} alt="Ícone de encerramento" />
        </ModalHeader>

        <ModalContent>
          <span>{title}</span>
          <p>{content}</p>

          <div>
            <button type="button" onClick={() => onCancel()}>
              {textCancelButton}
            </button>
            <button type="button" onClick={() => onSubmit()} className="submit">
              {textSubmitButton}
            </button>
          </div>
        </ModalContent>
      </ModalContainer>
    </Container>
  );
}
