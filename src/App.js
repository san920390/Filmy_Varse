import Header from "./componant/Header";
import Cards from "./componant/Cards";
import { Route, Routes } from "react-router-dom";
import Additem from "./componant/Additem";
import Detail from "./componant/Detail";
import { createContext, useState } from "react";
import Login from "./componant/Login";
import Signup from "./componant/Signup";

const Appstate = createContext();

function App() {

  const [login, setLogin] = useState();
  const [userName, setUserName] = useState("");
  return (
    <Appstate.Provider value={{login, setLogin, userName, setUserName}}>
    <div className="App relative">
      <Header/>
      <Routes>
      <Route path="/" element = {<Cards/>}/>
      <Route path="/additem" element = {<Additem/>}/>
      <Route path="/detail/:id" element = {<Detail/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/signup" element = {<Signup/>}/>
      </Routes>
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate}