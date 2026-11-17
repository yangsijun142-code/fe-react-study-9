function Textitem(props){
    return(
        <div className="textirem">
            <p className="title">제목 : {props.title}</p>
            <p>내용 : {props.content}</p>
        </div>
    )
}

function Quiz3(){

    let arr = [
    {title:'하나', content:"내용하나"},
    {title:'둘', content:"내용둘"},
    {title:'셋', content:"내용셋"},
    {title:'넷', content:"내용넷"},
    {title:'다섯', content:"내용다섯"},
    ];
    
    return(
        <div className="App">

    {arr.map((item, index)=>(
    <textirem
        key={index}
        title={item.title}
        content={item.content}
        />
    
        
    
    
    
    
    ))}





        </div>
    );
}

export default Quiz3


return (
<div className="App">
<div className='textItem'>
<p className='title'>제목 : 하나</p>
<p>내용 : 내용하나</p>
</div>
<div className='textItem'>
<p className='title'>제목 : 둘</p>
<p>내용 : 내용둘</p>
</div>
<div className='textItem'>
<p className='title'>제목 : 셋</p>
<p>내용 : 내용셋</p>
</div>
<div className='textItem'>
<p className='title'>제목 : 넷</p>
<p>내용 : 내용넷</p>
</div>
<div className='textItem'>
<p className='title'>제목 : 다섯</p>
<p>내용 : 내용다섯</p>
</div>
</div>
);