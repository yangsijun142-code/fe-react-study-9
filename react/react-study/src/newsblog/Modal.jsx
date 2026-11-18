

function Modal( props ){

    return(
        <div className="modal" style={{backgroundColor:props.bgClor}}>
            <h3>{props.title} {props.likeCount}</h3>
            <p>날짜</p>
            <p>상세명</p>
        </div>
    )
}

export default Modal;