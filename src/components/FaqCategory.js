import React, { useState } from "react";
import FadeIn from "react-fade-in";
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
  const [activeId, setActiveID] = useState("all");

  return (
    <div className="faq">
      <FadeIn>
        <div className="inner-box">
          <div id="acco">
            <div id="myBtnContainer">
              <button
                className={
                  activeId === "all" ? "tabs-button active" : "tabs-button"
                }
                onClick={() => {
                  setData(FaqCategoryList);
                  setActiveID("all");
                }}
              >
                전체
              </button>
              <button
                className={
                  activeId === "1" ? "tabs-button active" : "tabs-button"
                }
                onClick={() => {
                  filterResult("카테고리1");
                  setActiveID("1");
                }}
              >
                카테고리1
              </button>
              <button
                className={
                  activeId === "2" ? "tabs-button active" : "tabs-button"
                }
                onClick={() => {
                  filterResult("카테고리2");
                  setActiveID("2");
                }}
              >
                카테고리2
              </button>
              <button
                className={
                  activeId === "3" ? "tabs-button active" : "tabs-button"
                }
                onClick={() => {
                  filterResult("카테고리3");
                  setActiveID("3");
                }}
              >
                카테고리3
              </button>
            </div>

            <h3>제목</h3>

            <ul className="faqContainer">
              {data.map((values) => {
                const { id, category, question, answer } = values;
                return <FaqAccordion {...values} />;
              })}
            </ul>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default FaqCategory;
