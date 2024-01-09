import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import appStyle from "./app.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getIngredients } from "../../services/actions/burger-ingredients";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);
  return (
    <div className={appStyle.app}>
      <AppHeader />
      <Main />
    </div>
  );
}

export default App;
