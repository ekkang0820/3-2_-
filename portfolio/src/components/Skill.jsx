import React from "react";

const skillText = [
  {
    title: "Python",
    desc: "빅데이터 분석, 시계열 데이터분석",
  },
  {
    title: "LLM",
    desc: "파인튜닝, 프롬프트 엔지니어링, RAG",
  },
  {
    title: "RPA",
    desc: " STT데이터를 자동으로 요약 및 필요한 합성데이터를 생성하는 프로젝트",
  },
];

const Skill = () => {
  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">
          Skills <em>기술 스택</em>
        </h2>
        <div className="skill__desc">
          {skillText.map((skill, key) => (
            <div key={key}>
              <span>{key + 1}.</span>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
