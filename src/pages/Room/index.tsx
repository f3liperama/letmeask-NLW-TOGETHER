import { useParams } from "react-router-dom";

import { useState, FormEvent } from "react";

import { Button } from "../../components/Button";
import { ToggleSwitch } from "../../components/ToggleSwitch";
import { RoomCode } from "../../components/RoomCode";
import { Question } from "../../components/Question";
import { Logo } from "../../components/Logo";
import { LikeQuestionIcon } from "../../components/LikeQuestionIcon";

import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";
import { useTheme } from "../../hooks/useTheme";

import { database } from "../../services/firebase";

import {
  Container,
  Content,
  ContentMain,
  FormFooter,
  QuestionList,
  RoomTitle,
  UserInfo,
  Utils,
} from "./styles";

type RoomParams = {
  id: string;
};

export function Room() {
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { user } = useAuth();
  const { questions, title } = useRoom(roomId);
  const { toggleTheme } = useTheme();

  const [newQuestion, setNewQuestion] = useState("");

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();
    if (newQuestion.trim() === "") return;

    if (!user) {
      throw new Error("You must be logged in");
    }

    const question = {
      text: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion("");
  }

  async function handleLikeQuestion(
    questionId: string,
    likeId: string | undefined
  ) {
    if (likeId) {
      await database
        .ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
        .remove();
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user?.id,
      });
    }
  }

  return (
    <Container>
      <header>
        <Content>
          <Utils>
            <Logo />
            <ToggleSwitch onClick={toggleTheme} />
          </Utils>
          <RoomCode code={roomId} />
        </Content>
      </header>

      <ContentMain>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} perguntas</span>}
        </RoomTitle>
        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />
          <FormFooter>
            {user ? (
              <UserInfo>
                <img src={user?.avatar} alt="Avatar do usuário" />
                <span>{user?.name}</span>
              </UserInfo>
            ) : (
              <span>
                Para enviar uma pergunta, <button>faça seu login.</button>
              </span>
            )}

            <Button>Enviar pergunta</Button>
          </FormFooter>
        </form>

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
                  <button
                    className={`like-button ${question.likeId ? "liked" : ""}`}
                    type="button"
                    aria-label="Marcar como gostei"
                    onClick={() =>
                      handleLikeQuestion(question.id, question.likeId)
                    }
                  >
                    {question.likeCount > 0 && (
                      <span>{question.likeCount}</span>
                    )}
                    <LikeQuestionIcon />
                  </button>
                )}
              </Question>
            );
          })}
        </QuestionList>
      </ContentMain>
    </Container>
  );
}
