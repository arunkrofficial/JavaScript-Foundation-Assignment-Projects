let num1 = document.querySelector("#num-1") ;
let num2 = document.querySelector("#num-2") ;
let num3 = document.querySelector("#num-3") ;
let num4 = document.querySelector("#num-4") ;
let num5 = document.querySelector("#num-5") ;
let num6 = document.querySelector("#num-6") ;
let num7 = document.querySelector("#num-7") ;
let num8 = document.querySelector("#num-8") ;
let num9 = document.querySelector("#num-9") ;
let num0 = document.querySelector("#num-0") ;
let btnDel = document.querySelector("#btn-del") ;
let btnReset = document.querySelector("#btn-reset") ;
let btnEqual = document.querySelector("#btn-equal") ;

let output1 = document.querySelector("#output-field-para-1") ;
output1.textContent = "" ;


num1.addEventListener("click" , ()=>{
	output1.textContent = output1.textContent + '1' ;
})
num2.addEventListener("click" , ()=>{
	output1.textContent = output1.textContent + '2' ;
})
num3.addEventListener("click" , ()=>{
	output1.textContent = output1.textContent + '3' ;
})
num4.addEventListener("click" , ()=>{
	output1.textContent = output1.textContent + '4' ;
})
num5.addEventListener("click" , ()=>{
	output1.textContent = output1.textContent + '5' ;
})
num6.addEventListener("click" , ()=>{
	output1.textContent = output1.textContent + '6' ;
})
num7.addEventListener("click" , ()=>{
	output1.textContent = output1.textContent + '7' ;
})
num8.addEventListener("click" , ()=>{
	output1.textContent = output1.textContent + '8' ;
})
num9.addEventListener("click" , ()=>{
	output1.textContent = output1.textContent + '9' ;
})
num0.addEventListener("click" , ()=>{
	output1.textContent = output1.textContent + '0' ;
	
})
minus.addEventListener("click" , ()=>{
	output1.textContent = output1.textContent + '-' ;
	
})
plus.addEventListener("click" , ()=>{
	output1.textContent = output1.textContent + '+' ;
	
})
divide.addEventListener("click" , ()=>{
	output1.textContent = output1.textContent + '/' ;
	
})
multiply.addEventListener("click" , ()=>{
	output1.textContent = output1.textContent + 'x' ;
	
})
point.addEventListener("click" , ()=>{
	output1.textContent = output1.textContent + '.' ;
	
})
btnDel.addEventListener("click" , ()=>{
	if(output1.textContent.length > 0){
		let s = output1.textContent.slice(0 , (output1.textContent.length - 1)) ;
		output1.textContent = s ;
	}
})
btnReset.addEventListener("click" , ()=>{
	output1.textContent = "" ;
})

btnEqual.addEventListener("click" , ()=>{
	let mainStr = output1.textContent ;
	let value1 = "";
	let signn = "";
	let value2 = "";
	let flag = true ;
	for(let i=0; i<mainStr.length; i++){
		if(mainStr[i] != "+" && mainStr[i] != "-" && mainStr[i] != "x" && mainStr[i] != "/" && signn == ""){
			value1 = value1 + mainStr[i] ;
		}
		else if(flag == false){
			value2 = value2 + mainStr[i] ;
		}
		else{
			signn = mainStr[i] ;
			flag = false ;
		}
	}
	value1 = Number(value1) ;
	value2 = Number(value2) ;
	switch(signn){
		
		case ('-') :
			console.log(value1 - value2) ;
			output1.textContent = (value1 - value2) ;
			break ;
		case ('+') :
			console.log(value1 + value2) ;
			output1.textContent = (value1 + value2) ;
			break ;
		case ('x') :
			console.log(value1 * value2) ;
			output1.textContent = (value1 * value2) ;
			break ;
		case ('/') :
			console.log(value1 / value2) ;
			output1.textContent = (value1 / value2) ;
			break ;
	}
})