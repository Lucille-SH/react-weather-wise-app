import "./styles/App.css";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Main defaultCity="Barcelona" />
      </div>
      <Footer />
      <script src="src/index.js"></script>
    </div>
  );
}
