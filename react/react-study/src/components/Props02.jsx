import { useState } from "react";
import box from"./Box";


function Props02(){
    
    let [titleArr, settitleArr] =useState ['아침','점심','저녁'];
    let [detailArr, settitleAr] =useState ['졸리다','배부르다','피곤하다'];

    return(
        <div>

        <button onClick={()=>{

        /*
        React
        데이터 기반으로ㅜ 화면을 표시/지적
        버튼을 눌렸을때, 화면에 야식 정보가 추가 표시
        약식정보 ->배역에 추가->배열의 데이터 map으로 반복사면서 화면에...</div>
        */

        //배열은 참조변수 -> 새로운 값으로 변경 인식 -> 깊은 복사
        /*let temp = [...titleArr];
        temp.push("야식")
        settitleArr(temp); // 재렌더링 밸생조건 충족
        
            /*
            ['아침','점심','저녁'];
            ['졸리다','배부르다','피곤하다'];
            */
            detailArr.push("행복하다");

            console.log(titleArr, detailArr);
            
            
            }}>야식추가 버튼</button>


            {
                arr.map((value, index)=>{
                    return(
                    <box title={value} detail={detailArr[index]}/>   
                        
                    )
                })
            }

        


        </div>
    )

    
}

export default Props02
