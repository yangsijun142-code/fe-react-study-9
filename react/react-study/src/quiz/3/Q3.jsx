import './Q3.css'

function Textitem(props) {
    return (
        <div>
            <p className="title">제목 : {props.title}</p>
            <p className="textitem">내용 : {props.content}</p>
        </div>
    );
}

function Q3() {

    let arr = [
        {title: '하나', content: '내용하나'},
        {title: '둘', content: '내용둘'},
        {title: '셋', content: '내용셋'},
        {title: '넷', content: '내용넷'},

        {title: '다섯', content: '내용다섯'},
    ];

    return (
        <div className="App">
            {
                arr.map((item, index) => (
                    <Textitem
                        key={index}
                        title={item.title}
                        content={item.content}
                    />
                ))
            }
        </div>
    );
}

export default Q3;