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

function App() {
    let arr = ['하나','둘','셋'];
    let [num, setArr] = useState(0);
    return (
        <div>
            <p>{arr[num]}</p>
            <button onClick={() => {setArr((num+1) % arr.length)}}>
                변경버튼
            </button>
        </div>
    );
}
//ddddss



export default App
