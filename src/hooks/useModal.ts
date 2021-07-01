import { useState } from "react";

type ModalProps = {
  title: string;
  content: string;
  textCancelButton?: string;
  textSubmitButton?: string;
  active?: boolean;
  onCancel: () => void;
  onSubmit: () => void;
};

export function useModal() {
  const [modalProps, setModalProps] = useState<ModalProps>({} as ModalProps);

  return { modalProps, setModalProps };
}
