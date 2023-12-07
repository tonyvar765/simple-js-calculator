function buttonclick(val){
    console.log(val)
    document.getElementById('result').value+=val
    
}

function clearDisplay(){
    document.getElementById('result').value=""

}

function equalButton(){
    let text=document.getElementById('result').value
    let result=eval(text)
    document.getElementById('result').value=result
}