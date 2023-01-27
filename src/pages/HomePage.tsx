import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <div className="homeLayout">
        <div className="leftSide">
          <h1>Emigration doesn't have to be lonely!</h1>

          <div className="bubbleWrapper">
            <div className="chatBubble">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              sed elit sem lectus. Iaculis diam, lorem tellus pellentesque mi
              nulla lacus.
            </div>
            <div className="triangle"></div>
          </div>
          <div className="textBox">
            <input type="text" placeholder="example@mail.com" />
            <Link className="signin-cta" to={"/signin"}>
              Sign In
            </Link>
          </div>
        </div>
        <div className="rightSide">
          <img src={require("../img/home-img.jpg")} alt="hello" />
        </div>
      </div>
    </div>
  );
};
