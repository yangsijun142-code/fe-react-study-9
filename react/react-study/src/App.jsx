import "./App.css"
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import Basic01 from './components/Basic01'
// import State01 from './components/State01'
// import Export01 from './components/Export01'
// import State02 from './components/State02'
// import State03 from './components/State03'
// import Props01 from './components/App.jsx'
import { useState } from "react";
import FoodMarket from "./foodmarket/Foodmarket";
//import Quiz6 from "../../japs/quiz/Q6/Quiz6";
//import Quiz7 from "../Quiz07/Quiz07";
//import Quiz05 from "./newsblog";
//import Q3 from "./quiz/3/Q3";


function App() {
    return (
        <div>
            <FoodMarket/>
        </div>
    );
}

export default App;
