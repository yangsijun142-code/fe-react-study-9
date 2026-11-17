import "./NewsBlog.css"
import { useState } from "react"
import Modal from "./Modal"


function NewsBlog(){

    let[news1, SetNews1] = useState("어제의 뉴스")
    let[news2, SetNews2] = useState("오늘의 뉴스")
    let[news3, SetNews3] = useState("내일의 뉴스")

    let [news, setnwes] = useState (["어제의 뉴스", "오늘의 뉴스","내일의 뉴스"])
    
    let[likecount, setlikecount] = useState(0);
    
    let [modalFlag, setModalFlag]= useState(false);
    
    

    return (
        <div>
            <div className="black-nav">
                <h3>blog header</h3>
                <div>React Study</div>
            </div>

            <div className="post-list">
                <h4>제목</h4>
                <p>내용</p>
            </div>

            <div className="post-list">
                <h4>제목</h4>
                <p>내용</p>
            </div>

            <div className="post-list">
                <h4>제목</h4>
                <p>내용</p>
            </div>

            {
            modalFlag && <Modal1/>
            }
        </div>
        
    );
}

export default NewsBlog;









