 // FIRST TASK
 const convertFahrToCelcius=(value)=>{
	 if(typeof value === "string" || typeof value === "number"){
		 let inputVal = parseInt(value);

		 let cal = (inputVal - 32)*5/9;
		 let fahrToCelcius = cal.toFixed(4)
		 return `${fahrToCelcius}`;

	 } ;  

if(Array.isArray(value)){
	return `[${value}] is not a valid parameter but a/an array.`
}
if(typeof value === "object" || typeof value === "boolean"){
let result = JSON.stringify(value)
return `${ result}: is not a valid parameter but a/an ${typeof(value)}`;
}
	}

console.log(convertFahrToCelcius("0")) 
console.log(convertFahrToCelcius(0))
 console.log(convertFahrToCelcius([1,23]))
 console.log(convertFahrToCelcius({temp:0}))
 console.log(convertFahrToCelcius(true))

 // SECOND TASK
const checkYuGiHo =(n)=>{

	if(Array.isArray(n)){
	return `[${n}] Is not valid parameter but a/an array.`
}
if(typeof n === "object"){
let result = JSON.stringify(n)
return `${ result}: is not a valid parameter but a/an ${typeof(n)}`;
}

if( typeof n === "string" || typeof n === "boolean" || typeof n === "undefined" || typeof n === "object" || typeof n === "function" || typeof n === "object"){
	
	let message =JSON.stringify(n);

	return `${message}: Is not a valid parameter but a/an ${typeof(n)}`
	}else {
let arrayResult =[];
for(let i = 1; i <= n; i++){
	if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
		arrayResult.push("yu-gi-ho")
	}else if(i % 2 === 0 && i % 3 === 0){
		arrayResult.push("yu-gi")
	}else if(i % 3 === 0 && i % 5 === 0){
		arrayResult.push("gi-ho")
	}else if(i % 2 === 0 && i % 5 === 0){
        arrayResult.push("yu-ho")
	}else if(i % 2 === 0){
		arrayResult.push("yu")
	}else if(i % 3 === 0){
		arrayResult.push("gi")
	}else if(i % 5 === 0){
		arrayResult.push("ho")
	}else{
		arrayResult.push(i)
	}
	
}
return arrayResult;
	}

}


console.log(checkYuGiHo(30))
console.log(checkYuGiHo(10))
console.log(checkYuGiHo(false))
console.log(checkYuGiHo("fizzbuzz is menmeh"))
 console.log(checkYuGiHo([1,2,3]))
 console.log(checkYuGiHo({temp:0}))



