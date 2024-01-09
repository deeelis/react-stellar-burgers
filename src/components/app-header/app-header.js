import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyle from "./app-header.module.css";

function AppHeader() {
  return (
    <header className={`${headerStyle.header} pt-4 pb-4`}>
      <nav className={headerStyle.nav}>
        <div className={headerStyle.container}>
          <div className={`${headerStyle.element} pt-4 pr-5 pb-4 pl-5 mr-2`}>
            <BurgerIcon type="primary" />
            <p className="ml-2 text text_type_main-small">Конструктор</p>
          </div>
          <div className={`${headerStyle.element} pt-4 pr-5 pb-4 pl-5 mr-2`}>
            <ListIcon type="secondary" />
            <p className="ml-2 text text_type_main-small">Лента Заказов</p>
          </div>
        </div>
        <Logo />
        <div className={headerStyle.container}>
          <div className={`${headerStyle.element} pt-4 pr-5 pb-4 pl-5 mr-2`}>
            <ProfileIcon type="secondary" />
            <p className="ml-2 text text_type_main-small">Личный кабинет</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
