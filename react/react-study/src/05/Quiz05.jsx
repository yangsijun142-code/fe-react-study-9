/*import { useState } from "react";
import'./Quiz05.css'
import"./Quiz05.jsx"



export default function Quiz05(){
    const [boxes, setBoxes] = useState([
        'red',
        'blue',
        'green',
        'black'
        ]);

    const addfrontred = () => {
        setBoxes(['red, ...boxes']);
    };
    
    const addfrontblue = () => {
        setBoxes(['red, ...boxes']);
    };
    
    const addfrontgreen= () => {
        setBoxes(['red, ...boxes']);
    };

    const addfrontblack = () => {
        setBoxes(['red, ...boxes']);
    };



    const addBackred = () => {
        setBoxes(['red, ...boxes']);
    };
    
    const addBackblue = () => {
        setBoxes(['red, ...boxes']);
    };
    
    const addBackgreen= () => {
        setBoxes(['red, ...boxes']);
    };

    const addBackblack = () => {
        setBoxes(['red, ...boxes']);
    };

    const delereFront = () => {
        setBoxes(boxes.slice(0, -1))
    };

    return (
        <div>
            <button onClick={addFrontRed}>앞빨간박스추가</button>
            <button onClick={addFrontBlue}>앞파란박스추가</button>
            <button onClick={addFrontGreen}>앞초록박스추가</button>
            <button onClick={addBackRed}>뒤빨간박스추가</button>
            <button onClick={addBackBlue}>뒤파란박스추가</button>
            <button onClick={addBackGreen}>뒤초록박스추가</button>
            <button onClick={deleteFront}>앞 박스 삭제</button>
            <button onClick={deleteBack}>뒤 박스 삭제</button>

            <div className="box-container">
                {boxes.map((color, index) => (
                    <div
                        key={index}
                        className="color-box"
                        style={{ backgroundColor: color }}
                    >
                    </div>
                ))}
            </div>
        </div>
    );

};
*/







import "./components/Quiz05.css";
import { useState } from "react";


export default function Quiz05() {

    const [boxes, setBoxes] = useState([
        'red',
        'blue',
        'green',
        'black'
    ]);

    // 앞에 박스 추가
    const addFrontRed = () => {
        setBoxes(['red', ...boxes]);
    };

    const addFrontBlue = () => {
        setBoxes(['blue', ...boxes]);
    };

    const addFrontGreen = () => {
        setBoxes(['green', ...boxes]);
    };

    // 뒤에 박스 추가
    const addBackRed = () => {
        setBoxes([...boxes, 'red']);
    };

    const addBackBlue = () => {
        setBoxes([...boxes, 'blue']);
    };

    const addBackGreen = () => {
        setBoxes([...boxes, 'green']);
    };

    // 앞 박스 삭제
    const deleteFront = () => {
        setBoxes(boxes.slice(1));
    };

    // 뒤 박스 삭제
    const deleteBack = () => {
        setBoxes(boxes.slice(0, -1));
    };

    return (
        <div>
            <button onClick={addFrontRed}>앞빨간박스추가</button>
            <button onClick={addFrontBlue}>앞파란박스추가</button>
            <button onClick={addFrontGreen}>앞초록박스추가</button>

            <button onClick={addBackRed}>뒤빨간박스추가</button>
            <button onClick={addBackBlue}>뒤파란박스추가</button>
            <button onClick={addBackGreen}>뒤초록박스추가</button>

            <button onClick={deleteFront}>앞 박스 삭제</button>
            <button onClick={deleteBack}>뒤 박스 삭제</button>

            <div className="box-container">
                {boxes.map((color, index) => (
                    <div
                        key={index}
                        className="color-box"
                        style={{ backgroundColor: color }}
                    >
                    </div>
                ))}
            </div>
        </div>
    );
}

