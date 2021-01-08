import logo from './logo.svg';
import './App.css';
import Header from '../src/component/common/header';
import { BrowserRouter as Router, } from "react-router-dom";
import Routing from "./routing/RouterScreen";
import styles from '../src/component/style/style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Header/>
      <div id="mainContent">
        <Router>
          <Routing />
        </Router>
      </div>
    </div>
  );
}

export default App;
