/*import { useState } from "react";
import Quiz4 from "./Quiz/4/Quiz4";


function App() {

    const [boxes, setBoxes] = useState([1, 2]);

    function addBox() {
        setBoxes([...boxes, boxes.length + 1]);
    }

    return (
        <div className="container">

            <button onClick={addBox}>
                추가
            </button>

            <div className="box-list">
                {boxes.map((item, index) => (
                    <div className="box" key={index}>
                        박스
                    </div>
                ))}
            </div>

        </div>
    );
}

export default App;*/













import './Quiz04.css';
import { useState } from "react";

function Quiz4() {

    const [boxes, setBoxes] = useState([1, 2]);

    function addBox() {
        setBoxes([...boxes, boxes.length + 1]);
    }

    return (
        <div className="container">

            <button onClick={addBox}>
                추가
            </button>

            <div className="box-list">
                {boxes.map((item, index) => (
                    <div className="box" key={index}>
                        박스
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Quiz4;