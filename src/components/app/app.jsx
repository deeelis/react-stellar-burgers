import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import appStyle from "./app.module.css";

function App() {
  return (
    <div className={appStyle.app}>
      <AppHeader />
      <Main />
    </div>
  );
}

export default App;
