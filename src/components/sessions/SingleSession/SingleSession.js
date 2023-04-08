import React from "react";
import "./singlesession.css";
import Combinenav from "../../Nav/Combinednav/Combinenav";
import Maingooter from "../../footer/Mainfooter/Maingooter";
import Subfooter from "../../footer/Subfooter/Subfooter";

const SingleSession = () => {
  return (
    <div>
      <Combinenav />

      <div className="singlesession__container">
        <div className="single__session__img">
          <img
            src="https://images.unsplash.com/photo-1518949142393-f1d68174c92a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt=""
          />
        </div>
        <h2 className="singlesession__title">
          what is poverty what kind of issues are depend with people that
          situation
        </h2>
        <h3 className="session__author">by David</h3>
        <h3 className="session__date">2023.02.27 11.03.28</h3>
        <p className="session__para">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham. There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised
          words which don't look even slightly believable. If you are going to
          use a passage of Lorem Ipsum, you need to be sure there isn't anything
          embarrassing hidden in the middle of text. All the Lorem Ipsum
          generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
      <Maingooter />
      <Subfooter />
    </div>
  );
};

export default SingleSession;
