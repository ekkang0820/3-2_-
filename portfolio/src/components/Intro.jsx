import React from "react";
import phoneIcon from "../assets/icon/phone.svg";
import birthIcon from "../assets/icon/calendar.svg";
import emailIcon from "../assets/icon/email.svg";
import Myimg from "../assets/img/강은규_201944010.jpg";
import about from "../assets/img/about.jpg";

const introduction = {
  NameKor: "강은규",
  NameEng: "Kang Eun Kyu",
  brith: new Date(2000, 4, 28),
  phone: "010-6865-9647",
  email: "rkddmsrb222@gmail.com",
};

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro__inner">
        <h2 className="intro__title">
          INTRODUCTION <em>자기소개</em>
        </h2>
        <div className="intro__wrap">
          <div className="intro__img">
            <img></img>
          </div>
          <div className="intro__content">
            <h1>
              {introduction.NameKor}({introduction.NameEng})
            </h1>
            <div>
              <img src={birthIcon} alt="SVG" />
              <p>
                : {introduction.brith.getFullYear()}.
                {introduction.brith.getMonth().toString().padStart(2, "0")}.
                {introduction.brith.getDate()}( 만{" "}
                {new Date().getFullYear() - introduction.brith.getFullYear()} 세
                )
              </p>
            </div>
            <div>
              <img id="phni" src={phoneIcon} alt="SVG" />
              <p>: {introduction.phone}</p>
            </div>
            <div>
              <img src={emailIcon} alt="SVG" />
              <a href={`mailto:${introduction.email}`}>
                : {introduction.email}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="intro__inner">
                <h1 class="intro__title">{introText.title}</h1>
                <div class="intro__lines" aria-hidden="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
                <div class="intro__text">
                    <div class="text">
                        <div>{introText.desc[0]}</div>
                        <div>{introText.desc[1]}</div>
                        <div>{introText.desc[2]}</div>
                    </div>
                    <div class="img">
                        <img src={about} alt="어바웃" />
                    </div>
                </div>
                <div class="intro__lines bottom" aria-hidden="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </div> */}
    </section>
  );
};

export default Intro;
