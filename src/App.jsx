import { Route, Routes } from "react-router-dom";
import MainPage from "./components/mainPage/MainPage";
import NavBar from "./components/navBar/NavBar";
import ContactPage from "./components/contactPage/ContactPage";
import TodoList from "./components/todoList/TodoList";

function App() {
  return (
    <>
      <NavBar/>
        <Routes>
          <Route path="/" Component={MainPage}/>
          <Route path="/todolist" Component={TodoList}/>
          <Route path="/contact" Component={ContactPage}/>
        </Routes>
    </>
  );
}

export default App;
