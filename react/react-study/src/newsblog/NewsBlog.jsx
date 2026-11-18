/*import './NewsBlog.css'
import { useState } from 'react';
import Modal from './Modal';

export default function NewsBlog(){
    
    // 제목  잘 바뀌지 않는 내용
    // 하드코딩(텍스트가 직접 작성되어있는) vs 일반변수 vs State변수'
    let title = 'Blog Header';

    let [news1, setNews1] = useState('어제의 뉴스');
    let [news2, setNews2] = useState('오늘의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['어제의 뉴스','오늘의 뉴스','내일의 뉴스']);

    let [likeCount, setLikeCount] = useState(0);

    let [modalFlag, setModalFlag] = useState(false);

    return(
    <div>
        <div className='black-nav'>
            <h3>{title}</h3>
            <div style={{color:'orange', fontSize:'20px'}}>React Study</div>
        </div>

        <div className='post-list'>
            <h4 onClick={()=>{
                // ModalFlag 값 변경
                // setModalFlag(true);

                // if(modalFlag)
                //     setModalFlag(false);
                // else
                //     setModalFlag(true);

                setModalFlag( !modalFlag );
                // 재렌더링

            }}>{news[0]} <span onClick={(event)=>{
                // event.preventDefault();  발생하는 이벤트의 기본 수행을 막는다
                event.stopPropagation(); // 이벤트 발생을 추가로 전파/전달 하는것을 멈춤
                setLikeCount(likeCount+1); // 재렌더링
                }}>♥ </span>{likeCount}</h4>
            <p>내용</p>
        </div>

        <div className='post-list'>
            <h4>{news[1]}</h4>
            <p>내용</p>
        </div>

        <div className='post-list'>
            <h4>{news[2]}</h4>
            <p>내용</p>
        </div>

        {{
            modalFlag == true ? <Modal/> : null
        } }

        {
        modalflag $$ modal1/>
        }

    </div>
)}*/











/*import './NewsBlog.css';
import { useState } from 'react';

export default function NewsBlog() {

    let title = 'Blog Header';

    let [news, setNews] = useState([
        '오늘의 뉴스',
        '어제의 뉴스',
        '내일의 뉴스'
    ]);

    let [likeCount, setLikeCount] = useState(0);


    
    
    return (
        <div>
            <div className="black-nav">
                <h3>{title}</h3>
                <div>React Study</div>
            </div>

            {news.map((item, index) => (
                <div className="post-list" key={index}>
                    <h4>
                        {item}

                        {index === 0 && (
                            <span onClick={() => {
                                setLikeCount(likeCount + 1);
                            }}>
                                {' '}♥ {likeCount}
                            </span>
                        )}
                    </h4>

                    <p>내용 무</p>
                </div>
            ))}
        
        
        {
            modalFlag && <modal title=
}
        
        
        </div>
    );
} */













import './NewsBlog.css'


function Textitem(props) {
    return (
        <div className="news">
            <p className="title">
                {props.title}
            </p>

            <p className="textitem">
                {props.content}
            </p>
        </div>
    );
}


function NewsBlog() {

    let arr = [
        { title: '오늘의 뉴스', content: '내용 하나' },
        { title: '어제의 뉴스', content: '내용 둘' },
        { title: '내일의 뉴스', content: '내용 셋' },
    ];

    
    
    
    
    
    
    
    return (
        <div className="App">

            <header className="header">
                <h3>Blog Header</h3>
                <p>React Study</p>
            </header>

            {arr.map((item, index) => (
                <Textitem
                    key={index}
                    title={item.title}
                    content={item.content}
                />
            ))}

        </div>
    );
}

<div>
    <button onClick={()=>{

    let temp = [...news];
    temp[0] = "Today 긴급 속복"
    setNews(temp);
    }}>긴급제목변경</button>
</div>
{modal && <modal totle={SelectedTile} likeCount={SelectedLikeCount}
                    mews={news} setNews={setNews} bgClor='lightbule'/>
}

export default NewsBlog;