import React from "react";

const siteText = [
  {
    text: ["analyze", "visualization", "python"],
    title: "인천광역시 교통 인프라 분석",
    code: "https://github.com/ekkang0820/Inchoen_Traffic",
    info: [
      "사용프로그램:Google colab",
      "프로젝트 진행 : three month",
      "use stack : jupyter notebook, folium, scikit-learn",
    ],
  },
];

const Site = () => {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          Site coding <em>나의 작업물</em>
        </h2>
        <div className="site__wrap">
          {siteText.map((site, key) => (
            <article className={`site__item s${key + 1}`} key={key}>
              <span className="num">{key + 1}.</span>
              <div className="text">
                <div>{site.text[0]}</div>
                <div>{site.text[1]}</div>
                <div>{site.text[2]}</div>
              </div>
              <h3 className="title">{site.title}</h3>
              <div className="btn">
                <a href={site.code}>code</a>
                {/* <a href={site.view}>view</a> */}
              </div>
              <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Site;
