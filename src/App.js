import { Topbar } from "./components/topbar/Topbar";
import { Home } from "./pages/home/Home";
import { Single } from "./pages/single/Single";
import { Write } from "./pages/write/Write";
import { Settings } from "./pages/settings/Settings";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";

function App() {
  return (
    <div>
      <Topbar />
      <Home />
      <Single />
      <Write />
      <Settings />
      <Login />
      <Register />
    </div>
  );
}

export default App;
