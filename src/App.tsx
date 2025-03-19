import { Header } from "./components/Header";
import {Login} from "./pages/login/login";
import {Register} from "./pages/register/register";

//depois eu arrumo o Login e o Registro, oto entendendo como funciona

function App() {
  return (
    <>
      <div>
        <Header />
      </div>


      <Login />
      <Register />
    </>
  );
}

export default App;
