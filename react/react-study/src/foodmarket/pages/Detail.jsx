import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from 'react';
import './Detail.css';

export default function Detail({foods}){

    
//---------------------------------------------------------------------------------
    /*
        useEffect 훅 (hools)

        useEffect(실행할함수, 의존성배열)

        useEffect(실행할함수, [])   빈배열 -> 생성시에만 실행
        useEffect(실행할함수) -> 모든 로딩될때 실햄 (생성, update)
        useEffect(실행할함수, [count])  ->  count 값이 바뀔때마다 실행
        useEffect(실행할함수, [a, b, c])  ->  a, b, c 중에 하나라도 값이 바뀔때마다 실행
        
        useEffect(실행할함수(){
            retune ()=>{ clean up function }     unmount 시 실행할 함수
        }, 의존성배열)
    */

    let [orderCount, setOrderCount] = useState(0);
    let [test, setTest] = useState(0);

    useEffect(()=>{
        console.log('useEffect 함수 실행. (의존성배열 없음)');
    })

    useEffect(()=>{
        console.log('useEffect 함수 실행. [] 빈 의존성배열 의존');
    }, [])

    useEffect(()=>{
        console.log('useEffect 함수 실행. [ordercount] : ', orderCount);

        return ()=>{
            console.log('useCount 함수 실행. [orderCount] -> return () 함수 실행');
        }

    }, [orderCount])

    useEffect(()=>{
        console.log('useEffect 함수 실행. [test] : ', test);
    }, [test])

    useEffect(()=>{
        console.log('useEffect 함수 실행. [test, orderCount] : ');
    }, [test, orderCount])

    

    let [viewStatus, setViewStatus] = useState('');

    useEffect(()=>{

        //setTimeout(함수, 시간); 일정시간 후에 작동하도록 타이머거는 함수
        setTimeout(() => {
            setViewStatus('end');
        }, 300);  // 300 밀리초

    }, [])


    let [modalShow, setModalShow] = useState(true); // 모달창 표시 여부 true | false

    // 2초후에 모달 창 자동 닫기
    useEffect(()=>{
        // modalShow state 변수값 조정

        setTimeout(() => {
            setModalShow(false);
        }, 2000);
    })

    useEffect(()=>{
        //setTimeout    일정시간 후에 작동
        //setInterval   일정시간마다 반복으로 실행
        //비동기방식

        //clearTimeout
        //clearInterval

        const interv = setInterval(() => {
        console.log('interval') 
        }, 1000);

        //clean up function
        return ()=>{
            clearInterval(interv);
        }

    }, [orderCount])

    

//---------------------------------------------------------------------------------




    // 상세보기를 눌렀을때
    // 특정 상품의 상세정보를 보여주는 페이지

    // url 주소창 접속 경로   /detail/:id

    //  /detail/fd001    /detail/fd008

    // 상세보기를 누르면 -> /detail/id값 
    // id값으로 넘어온 값이 무엇이냐?  ---> foods 데이터 중에 id가 같은 상품 찾기

    // fd000 fd002   fd008 ???

    // :id 위치에 있는 값 접근
    let {id} = useParams();
    console.log(id);

    // id 하고 같은 id 가진 food 데이터 찾기

    // filter
    /* let food = foods.filter((food, index)=>{
        return food.id == id;
    }) */

    // find, findIndex
    let food = foods.find((food, index)=>{          //fd001    {}
        return food.id == id;
    })
    // food.title

    let foodIndex = foods.findIndex((food, index)=>{  //fd001    1
        return food.id == id;
    })

    // foods[foodIndex].title ;

    console.log(food);
    console.log('id:', id);
    console.log('food:', food);
    console.log('foods:', foods);

    let navigate = useNavigate();

    if( food == undefined || food == null){
        return(
        <div>
            <h1>김보석이 똑똑하다는 겁니다</h1>
            <h2>없다는거임</h2>
            <Button variant='info' onClick={()=>{
                navigate('/');
            }}>보석이 집으로 가기</Button>
        </div>
    )}

    
    //------------------------------------------------
    
    /*스타일 적용
    
    
    가격에 따라서 스타일 적용
    가격표시
            1만원 이상 -> 빨간색 으로 표시
            1만원 이하 -> 파란색 금액 표시

            1) js 객체

            요소에 style 속성에는 js 객체로 설정 가능
            
            color :foods.price >= 1000? "red": "blue"
            
           // 2)
    
        <p style={ priceTextStyle }>{food.price}</p>
    
    
        3) css 클래래스 연계 활용
    
    
        4) css class + useState 조합 -> 효과 발생
        
        
        
        
        
        
        5) js 객체로 내부에서 스타일 정의 사용
        */
    
    
    //-------------------------------------
    
        const priceTextStyle = {
        color :foods.price >= 1000? "red": "blue"
        
    }
    
    
    
    const prisTextStylefunc = (price)=>{
        if(price >=10000)
            return {color:"red"};
        else
            return{color:"blue"};
    
    }        

    
    
    
    
    return (
        <div>
            <Container className={"start " + viewStatus}>
                <Row>
                    <Col md={6}>
                        <img src={ import.meta.env.BASE_URL + food.imgPath} style={ {width:'100%'} } />
                    </Col>
                    <Col md={6}>
                        <h4>{food.title}</h4>
                        <p>{food.content}</p>
                        <p style={ {color :foods.price >= 1000? "red": "blue"}}>{food.price}</p>

                        
                        <p style={ priceTextStyle }>{food.price}</p>
                        
                        <p className={ food.price >=10000 ? "price-red" : 'price-blue' }>{food.price}</p>
                        <p className={ 'text-strong' + (food.price >=10000 ? "price-red" : 'price-blue') } > </p>
                        <p className={ 'text-strong' + priceTextClassname}>{food.price}</p>
                        <p className= {[ 'text-strong' , priceTextClassname].joun(" ") } >{food.price}</p>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        <div>
                            <Button variant="dark" onClick={()=>{
                                if(orderCount>0){
                                    setOrderCount(orderCount-1);
                                } else{}
                                
                            }}>-</Button>
                            <span> {orderCount} </span>
                            <Button variant="dark" onClick={()=>{
                                if(orderCount<food.stockCount){
                                    setOrderCount(orderCount+1);
                                } else{};
                                console.log('onClick() 함수에서 출력 : ' + orderCount)
                            }}>+</Button>
                        </div>

                        {food.stockCount<=0 ? <Button variant="danger" onClick={()=>{alert('상품이 품절입니다.')}}>품절</Button> : <Button variant="primary" >주문하기</Button>}
                    </Col>
                </Row>



                <Modal
                    show={modalShow}
                    onHide={()=>{setModalShow(false);}}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        이랏샤이마세!
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>아리까또 고자이마쓰</h4>
                        <p>
                        11234565
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>{setModalShow(false);}}>Close</Button>
                    </Modal.Footer>
                </Modal>
                
            </Container>
        </div>
    )


}





