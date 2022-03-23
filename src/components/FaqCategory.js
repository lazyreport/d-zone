import React, { useState } from "react";
import FadeIn from 'react-fade-in';
import FaqCategoryList from "./FaqCategoryList";
import "./FaqCategory.css";
import FaqAccordion from "./FaqAccordion";





function FaqCategory() {
  const [data, setData] = useState(FaqCategoryList);
  const filterResult = (catItem) => {
    const result = FaqCategoryList.filter((currentData) => {
      return currentData.category === catItem;
    });
    setData(result);
  };

  /* button active */
  const [active, setActive] = useState(false);
  const buttonHandler = () => {
  setActive(!active);
    };
  
  return (
    
    <main className="faq">
      <FadeIn>
        <div className="inner-box">
          <div id="acco">

          <div id="myBtnContainer">
              <button className={active ? "tabs-button active" : "tabs-button deactive"} onClick= {() => {
                setData(FaqCategoryList)
                buttonHandler()
              } } >
              전체
              </button>
              <button className={active ? "tabs-button active" : "tabs-button deactive"} onClick={() => {
                filterResult("카테고리1")
                buttonHandler()
               } }>
              카테고리1
              </button>
              <button className={active ? "tabs-button active" : "tabs-button deactive"} onClick={() => {
                filterResult("카테고리2")
                buttonHandler()
              } }>
              카테고리2
              </button>
              <button className={active ? "tabs-button active" : "tabs-button deactive"} onClick={() => {
                filterResult("카테고리3")
                buttonHandler()
               } }>
              카테고리3
              </button>
            </div>

            <h3>제목</h3>

            <ul className="faqContainer">
              {data.map((values) => {
                const { id, category, question, answer } = values;
                return (
                  <FaqAccordion {...values}/>

                );
              })}
            </ul>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}

export default FaqCategory;