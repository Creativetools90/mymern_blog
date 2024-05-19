import React from "react";
import "./Card.css";
import WordLimit from "../../WordLimit";
const CardView = ({ imgUrl, getTitle, getCaption }) => {

  return (
    <div className="cardView">
      <ul className="postlistCard">
        <li className="post">
          <div className="p_img">
          {imgUrl && <img src={imgUrl} alt="post" />}
          </div>
          <div className="p_i">
            <p className="date">
              busnuess travel <span> - may 2, 2024</span>
            </p>
            <div className="i_head_p">
              <h2 className="infoHeading">
              {
                getTitle
              }
              </h2>
            </div>
            <p className="pinfoPera">
            <WordLimit  text={getCaption} limit={30} />
            </p>
            <div className="pinfoprofile">
              <img src="/profile.png" alt="profile" />
              <div className="pro">
                <h3 className="profilename">creativemoon</h3>
                <p>ceo of creativemoon</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CardView;
