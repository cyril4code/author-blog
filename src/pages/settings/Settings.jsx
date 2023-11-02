import { Sidebar } from "../../components/sidebar/Sidebar";
import "./settings.css";
import settingsPageImg from "../../assets/Ankur Logo.jpg";
export const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPro">
            <img src={settingsPageImg} alt="" />
            <label htmlFor="fileInput">
              <i class="settingsProIcon fa-regular fa-circle-user"></i>
            </label>
          </div>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <label>Username</label>
          <input type="text" placeholder="Safak" />
          <label>Email</label>
          <input type="email" placeholder="Safak@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};
