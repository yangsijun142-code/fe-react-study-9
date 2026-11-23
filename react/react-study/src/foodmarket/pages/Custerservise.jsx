
function Custerservise(){
    /*
        localStorage
        브자우저에 간단한 데이터 저장 및 활용 용도의 저장소

        읽기
        쓰기
        삭제





*/

    localStorage.setItem("kye11", "value11")
    localStorage.setItem("hello", "안녕하세요")

    console.log(localStorage.setItem("msg"))
    localStorage.removeItem("abc");

/*

    단순 첵스트 형챠로 저장가능
    복잡한 배열이나 객체 단위로 저장 할려면?

    js 객체 -> json 포맷의 문자열로 변환 -> 문자열 저장
    json.stringify
    읽기 ->json 포맷의 문자열  -> js 객체 형태로 전환
    jsin.parse()

*/

let tmpfood = {
    id: 'fd002',
        title: "Hamburger",
        content: "완전식품 햄버거",
        price: 11000,
        imgPath: 'images/food3.jpg',
        stockCount: 0
}
localStorage.setItem('tempFood', tempFood);
localStorage.setItem('tempFoodJson', JSON.stringify(tempFood));

let tempFoodJson = localStorage.getItem('tempFoodjson');
console.log(tempFoodObject);
console.log(tempFoodObject.title);


let tempFoodObject = localStorage.getItem('tempFoodjson');
console.log(tempFoodObject);1
console.log(tempFoodObject.title);
console.log(tempFoodObject.content);


return(
    <div>
        <h1>고객 서비스 패이지</h1>
        <h2>정성껏 다해 모시겠습니다</h2>
    </div>
)


}

