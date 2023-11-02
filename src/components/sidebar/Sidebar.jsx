import "./sidebar.css";
import Tyagi from "../../assets/Tyagi.jpg";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={Tyagi} alt="" className="sidebarImg" />
        <p>
          Nirmesh Tyagi ji is recognized as a social worker as well as a senior
          journalist and editor. He was born on 8-8-1967 in Ghaziabad district
          of Uttar Pradesh. He did his primary education from Ghaziabad and
          further studies from Hyderabad. He started his journalism career from
          Punjab Kesari where he was the Noida Bureau Chief for twenty years,
          after that he was the Gautam Buddha Nagar Bureau Chief in Deshbandhu
          newspaper for four years, after that he was the editor in Rashtriya
          Ujala and since 2014, he is currently sitting as the editor in Ankur.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Nature</li>
          <li className="sidebarListItem">Politcal</li>
          <li className="sidebarListItem">Crime</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};
