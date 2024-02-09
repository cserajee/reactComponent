import React, { useState } from "react";
import questions from "./data";
import Questions from "./component/Questions";
import "./style.css";
const AccordionApp = () => {
  const [accordion, setAccordion] = useState(questions);
  return (
    <main>
      <Questions questions={accordion} />
    </main>
  );
};

export default AccordionApp;
