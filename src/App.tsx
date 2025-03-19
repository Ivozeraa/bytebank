import { Header } from "./components/Header";
import S from "./App.module.css";
import AppRoutes from "./routes";

//depois eu arrumo o Login e o Registro, oto entendendo como funciona

function App() {
  return (
    <>
    <AppRoutes />
      <div className={S.app}>
        <Header />

      </div>
    </>
  );
}

export default App;
