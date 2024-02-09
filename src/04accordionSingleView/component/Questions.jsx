import React from "react";
import Question from "./Question";

const Questions = ({ questions, activeId, toggleActiveId }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            activeId={activeId}
            toggleActiveId={toggleActiveId}
          />
        );
      })}
    </section>
  );
};

export default Questions;
