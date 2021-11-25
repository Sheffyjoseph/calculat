
var displayValue=(num)=>result.value+=num
// function displayValue(num){
//     let res=document.querySelector("#result")
//     res.value +=num
// }

var clearBox=()=>res.value=""
// function clearBox(){
//     document.querySelector("#result").value=""
// }

var evaluateExpression=()=>result.value=eval(result.value)
// function evaluateExpression(){
//     let res=document.querySelector("#result")
//     let cur_val=res.value
//     let result=eval(cur_val)
//     res.value=result
// }


function backSpace(){
    let bak=document.querySelector("#result")
    let cur_val=bak.value
    bak.value=cur_val.slice(0,-1)
}