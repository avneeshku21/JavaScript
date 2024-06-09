
const count=document.querySelector('.count')
const minusBtn =document.querySelector('.minus-btn')
const resetBtn=document.querySelector('.reset-btn')
const changeBY=document.querySelector('.changeBY')
const plusBtn =document.querySelector('.plus-btn')

minusBtn.addEventListener('click',()=>{
    const countValue=Number(count.innerText)
    const changeBYValue=Number(changeBY.value)
    count.innerText=countValue-changeBYValue
})
plusBtn.addEventListener('click',()=>{
    const countValue=Number(count.innerText)
    const changeBYValue=Number(changeBY.value)
    count.innerText=countValue+changeBYValue
})
resetBtn.addEventListener('click',()=>{
    Number(count.innerText=0)
})