let result = document.getElementById("display");



function get_calc(elem) {

  if (result.value === "c"){
  
  
  } else {
  
  
  result.value = result.value + elem.value;
  
  }
  
  }



function edit(elem) {

if (result.value.slice(1) === '+' ){

return;

} else if (result.value.slice(-1) === '-' ){

return;

} else if (result.value.slice(-1) === '*' ){

return;

} else if (result.value.slice(-1) === '÷' ){

return;

} else {

result.value = result.value + elem.value;

}

}



function calc() {

result.value = new Function("return" + result.value)();

}



function update(){

result.value = '';

}