import "./header.css";
import naturePic from "../../assets/pexels-joe-gingerich-6907893.jpg";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitlesLg">VARTMAN ANKUR PARIVAR</span>
          <span className="headerTitlesSm">
            Every Morning..... Bringing The World To Your Doorstep
          </span>
        </div>
        <img className="headerImg" src={naturePic} alt="Header Img" />
      </div>
    </>
  );
};
