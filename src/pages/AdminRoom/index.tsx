import { useParams, useHistory } from "react-router-dom";

import { Logo } from "../../components/Logo";
import deleteImg from "../../assets/images/delete.svg";
import checkImg from "../../assets/images/check.svg";
import answerImg from "../../assets/images/answer.svg";

import { Button } from "../../components/Button";
import { ToggleSwitch } from "../../components/ToggleSwitch";
import { RoomCode } from "../../components/RoomCode";
import { Question } from "../../components/Question";

import { useRoom } from "../../hooks/useRoom";
import { useTheme } from "../../hooks/useTheme";

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
  const { theme, toggleTheme } = useTheme();

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que deseja excluir esta pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
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
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push("/");
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
                      <img src={checkImg} alt="Marcar pergunta" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <img
                        src={answerImg}
                        alt="Declarar que esta pergunta está sendo respondida no momento"
                      />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Deletar pergunta" />
                </button>
              </Question>
            );
          })}
        </QuestionList>
      </ContentMain>
    </Container>
  );
}
