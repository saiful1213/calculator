const inputField = document.getElementById('inputField');

function showNum(e){   
   inputField.value += e;
};

function clr(){
   inputField.value = '';
}

function showResult(){
   inputField.value = eval(inputField.value); 
}

function del(){
   inputField.value = inputField.value.slice(0, -1);
}

