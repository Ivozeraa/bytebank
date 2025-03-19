import { Header } from "./components/Header";
import {Login} from "./pages/login/login";
import {Register} from "./pages/register/register";
import S from './App.module.css'

//depois eu arrumo o Login e o Registro, oto entendendo como funciona


function App() {
  return (
    <>
      <div className={S.app}>
      <Header />
   </div>


      <Login />
      <Register />
    </>
  );
}

export default App;
