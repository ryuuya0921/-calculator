let result = document.getElementById ("display");



function get_calc(elem) {

if (result.value === "C"){


} else {


result.value = result.value + elem.value;

}

}


function edit(elem) {

if (result.value.slice(-1) === '+' ){

return;

} else if (result.value.slice(-1) === '-' ){

return;

} else if (result.value.slice(-1) === '*' ){

return;

} else if (result.value.slice(-1) === '/' ){

return;

} else if (result.value.slice(-1) === '.' ){

return;


} else {

result.value = result.value + elem.value;

}

}

function calc() {

  try {
    result.value = eval(result.value);
} catch (error) {
    result.value = "";
}

}

function update(){

result.value = '';

}