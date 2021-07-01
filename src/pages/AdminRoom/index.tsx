import { useParams, useHistory } from "react-router-dom";

import { Logo } from "../../components/Logo";

import { CheckQuestionIcon } from "../../components/CheckQuestionIcon";
import { DeleteQuestionIcon } from "../../components/DeleteQuestionIcon";
import { AnswerQuestionIcon } from "../../components/AnswerQuestionIcon";

import { Button } from "../../components/Button";
import { ToggleSwitch } from "../../components/ToggleSwitch";
import { RoomCode } from "../../components/RoomCode";
import { Question } from "../../components/Question";
import { Modal } from "../../components/Modal";

import { useRoom } from "../../hooks/useRoom";
import { useTheme } from "../../hooks/useTheme";
import { useModal } from "../../hooks/useModal";

import { database } from "../../services/firebase";

import {
  Container,
  Content,
  ContentMain,
  QuestionList,
  RoomTitle,
  Utils,
} from "./styles";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);
  const { toggleTheme } = useTheme();
  const { modalProps, setModalProps } = useModal();

  async function handleDeleteQuestion(questionId: string) {
    setModalProps({
      title: "Excluir pergunta",
      content: "Tem certeza que deseja excluir esta pergunta?",
      textCancelButton: "Cancelar",
      textSubmitButton: "Sim, excluir",
      active: true,
      onCancel: () => {
        setModalProps({ ...modalProps, active: false });
      },
      onSubmit: async () => {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        setModalProps({ ...modalProps, active: false });
      },
    });
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  async function handleEndRoom() {
    setModalProps({
      title: "Encerrar sala",
      content: "Tem certeza que deseja encerrar esta sala?",
      textCancelButton: "Cancelar",
      textSubmitButton: "Sim, encerrar",
      active: true,
      onCancel: () => {
        setModalProps({ ...modalProps, active: false });
      },
      onSubmit: async () => {
        await database.ref(`rooms/${roomId}`).update({
          endedAt: new Date(),
        });
        setModalProps({ ...modalProps, active: false });
        history.push("/");
      },
    });
  }

  return (
    <Container>
      <header>
        <Content>
          <Utils>
            <Logo />
            <ToggleSwitch onClick={toggleTheme} />
          </Utils>
          <div className="group-button">
            <RoomCode code={roomId} />
            <Button secondary onClick={() => handleEndRoom()}>
              Encerrar sala
            </Button>
          </div>
        </Content>
      </header>

      <ContentMain>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} perguntas</span>}
        </RoomTitle>

        <QuestionList>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                author={question.author}
                text={question.text}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <CheckQuestionIcon />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <AnswerQuestionIcon />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <DeleteQuestionIcon />
                </button>
              </Question>
            );
          })}
        </QuestionList>
      </ContentMain>

      <Modal {...modalProps} />
    </Container>
  );
}
