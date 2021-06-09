import React, { useState, useRef } from "react";
import Chevron from "./Chevron.jsx";

const Accordion = ({answer,id}) => {
  const [activeId] = useState(id);
  const [setRotate] = useState("faqs__content__answers-item__icon");

  const content = useRef(null);

  const toggleAccordion = (e) => {
    const panels = Array.from(document.querySelectorAll(".faqs__content__answers-item__content"));
    panels.forEach( (panel,index) => { 
      var panelId = panel.previousElementSibling.attributes.id.nodeValue;
      var svg = panel.previousElementSibling.childNodes[1];

      if(panel.classList.contains('active')) {
        //clicked twice consecutively
          panel.classList.remove('active');
          svg.classList.remove('rotate');
          svg.classList.add('rotateBack');
          panel.style.transition = 'max-height 0.6s ease';
          panel.style.maxHeight = '0px';
      }else {
        //Clicked once
        if(activeId === parseInt(panelId)) {
          svg.classList.remove('rotateBack');
          svg.classList.add('rotate');
          panel.style.transition = 'max-height 0.6s ease';
          panel.style.maxHeight = content.current.scrollHeight + 'px';
          panel.classList.add('active');
        }else {
          panel.classList.remove('active');
          svg.classList.remove('rotate');
          svg.classList.add('rotateBack');
          panel.style.transition = 'max-height 0.6s ease';
          panel.style.maxHeight = '0px';
        }
      }
    });
  }

  return (
    <div  className="faqs__content__answers-item">
        <button 
            data-id={id}
            id={id} 
            className={`faqs__content__answers-item__button`}
            onClick={toggleAccordion}>

            <p data-id={id}
              className="faqs__content__answers-item__title">{answer.question}</p>
            <Chevron data={id}
                    className={`${setRotate}`} />
        </button>
        <div  ref={content} 
               className={`faqs__content__answers-item__content`}>
              <p className="faqs__content__answers-item__text">
                {answer.answer}
              </p>
      </div>
    </div>
  );
}

export default Accordion;
