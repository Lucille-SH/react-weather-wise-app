import "./styles/styles.css";
import Search from "./Search";
import Main from "./Main";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />

        <Main />
        <Forecast />

        <Footer />
      </div>
      <script src="src/index.js"></script>
    </div>
  );
}
