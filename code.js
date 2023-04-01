const numbers = document.querySelectorAll(".num")
const valuecal =document.querySelector('.value-cal')
const operators = document.querySelectorAll(".operator")
const equal = document.querySelector('.equal')
const clear =document.querySelector(".ac")
const dec = document.querySelector(".decimal")


let prevnum =""
let operatorcal = ""
let curnum ="0"

const update=(number) =>{
    valuecal.value=number
}

const inputnum =(number) =>{
    if(curnum ==='0'){
    curnum = number
}else{
    curnum += number
}
}

const inputope =(operator) =>{
    if(operatorcal ===""){
    prevnum =curnum
}
    operatorcal = operator
    curnum=""
}
const inputdec = (dot)=>{
    if(curnum.includes('.')){
        return
    }
    curnum +=dot

}


clear.addEventListener("click", () =>{
    
    prevnum =curnum
    operatorcal = operator
    curnum =''
    update(curnum)
})

dec.addEventListener("click", (event) =>{
    inputdec(event.target.value)
    update(curnum)
}
)

operators.forEach((operator) =>{
    operator.addEventListener("click", (event) =>{
        inputope(event.target.value)
    })
})

numbers.forEach((number) =>{
    number.addEventListener("click", (event) =>{
        inputnum(event.target.value)
       update(curnum)
    })
})

equal.addEventListener("click", ()=>{
    cal()
    update(curnum)
})

clear.addEventListener("click", () =>{
    prevnum = ""
    operatorcal=""
    curnum="0"
    update(curnum)
})

const cal =()=>{
    let result =""
    let a = parseFloat(prevnum)
    let b = parseFloat(curnum)
    switch(operatorcal){
        case "+":
            result = a + b
            break
        case "-":
            result =a - b
            break
        case "*":
            result =a * b
            break
        case "/":
            result =a / b
            break
        default:
            break
    }
    curnum = result
    operatorcal =""
}

