import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const peoples = [
  { id: 1, name: "Jack", desc: "some desc 1", img: "person1" },
  { id: 2, name: "Joan", desc: "some desc 2", img: "person2" },
  { id: 3, name: "Mike", desc: "some desc 3", img: "person3" },
  { id: 4, name: "Hailie", desc: "some desc 4", img: "person4" },
];

export const ChatAndCard = () => {
  const [person, setPerson] = useState({
    id: 1,
    name: "Jack",
    desc: "some desc 1",
    img: "person1",
  });

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const likeHandler = () => {
    setPerson((prevState) => peoples[prevState.id]);
  };
  const dislikeHandler = () => {
    setPerson((prevState) => peoples[prevState.id]);
  };

  const handlerDrop = () => {
    setIsDropDownOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="homeLayout">
      <div className="peopleCards">
        <div className="personCard">
          <img
            src={require("../img/" + person.img + ".jpg")}
            alt="person profile"
          />
          <div className="desc">
            <div className="personName">{person.name}</div>
            <div className="personDesc">{person.desc}</div>
            <div className="bottomActions">
              <ThumbUpIcon
                fontSize="large"
                className="actionIcon like"
                onClick={likeHandler}
              />
              <ThumbDownIcon
                fontSize="large"
                className="actionIcon dislike"
                onClick={dislikeHandler}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="peopleChat">
        <div className="ChatHeading">Your massage</div>
        <div className="peopleBubble">
          <div className="bubble">
            <img src={require("../img/person1.jpg")} alt="person profile" />
          </div>
          <div className="bubble">
            <img src={require("../img/person2.jpg")} alt="person profile" />
          </div>
          <div className="bubble">
            <img src={require("../img/person3.jpg")} alt="person profile" />
          </div>
        </div>
        <div className="ChatWrapper">
          <div className="imgAndData">
            <img src={require("../img/person1.jpg")} alt="person profile" />
            <span>
              <div className="chatPersonName">Jackson (1)</div>
              <div>Hello John Doe how are you?</div>
            </span>
          </div>
          <KeyboardArrowUpIcon fontSize="large" className="dropDownIcon" />
        </div>
        {isDropDownOpen ? (
          <div className="openedChat">
            <div className="chatHeader">
              <div className="imgAndData">
                <img src={require("../img/person3.jpg")} alt="person profile" />
                <div className="chatPersonName">Karl</div>
              </div>
              <KeyboardArrowUpIcon
                onClick={handlerDrop}
                fontSize="large"
                className="dropDownIcon"
              />
            </div>
            <div className="chatWrapper">
              <div className="personChatBubble">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, unde.
              </div>
              <div className="userChatBubbleWrapper">
                <div className="userChatBubble">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Omnis deserunt illo ea ad dicta inventore aut error. Fugit,
                  consequatur officia?
                </div>
              </div>
              <div className="personChatBubble">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, accusantium?
              </div>
              <div className="userChatBubbleWrapper">
                <div className="userChatBubble">
                  Lorem ipsum dolor sit amet.
                </div>
              </div>
              <div className="userChatBubbleWrapper">
                <div className="userChatBubble">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
                  cupiditate deserunt quos veritatis aspernatur quam?
                </div>
              </div>
            </div>
            <div>
              <div className="answerInput">
                <input type="text" placeholder="type..." />
                <div className="signin-cta">Sign In</div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="ChatWrapper">
              <div className="imgAndData">
                <img src={require("../img/person3.jpg")} alt="person profile" />
                <span>
                  <div className="chatPersonName">Karl (1)</div>
                  <div>Hello John Doe I Karl here are you free tonight?</div>
                </span>
              </div>
              <KeyboardArrowUpIcon
                onClick={handlerDrop}
                fontSize="large"
                className="dropDownIcon"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
