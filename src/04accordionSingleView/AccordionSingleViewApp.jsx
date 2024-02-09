import React, { useState } from "react";
import questions from "./data";
import Questions from "./component/Questions";
import "./style.css";
const AccordionSingleViewApp = () => {
  const [accordion, setAccordion] = useState(questions);
  const [activeId, setActiveId] = useState(null);
  const toggleActiveId = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };
  return (
    <main>
      <Questions
        questions={accordion}
        activeId={activeId}
        toggleActiveId={toggleActiveId}
      />
    </main>
  );
};

export default AccordionSingleViewApp;
