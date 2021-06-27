import { ReactNode } from "react";

//import "./styles.scss";

import { Container, UserInfo } from "./styles";

type QuestionProps = {
  author: {
    name: string;
    avatar: string;
  };
  text: string;
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({
  author,
  text,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <Container
      className={`${isAnswered ? "answered" : ""} ${
        isHighlighted && !isAnswered ? "highlighted" : ""
      }`}
    >
      <p>{text}</p>
      <footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div>{children}</div>
      </footer>
    </Container>
  );
}
