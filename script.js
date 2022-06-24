// read operator
const operator = prompt('Please enter operator You want to perform\neg(+, -, /, *)');
let result = 0;

const num1 = parseFloat( prompt('Enter first number: '));
const num2 = parseFloat( prompt('Enter second number: '));
if(isNaN(num1) || isNaN(num2)){
    alert('wrong input! Refresh the page again and provide data!');
}else{

    if(operator == '+'){
        result = num1 + num2;
    }else if (operator == '-'){
        result = num1 - num2;
    }else if (operator == '*'){
        result = num1 * num2;
    }else if (operator == '/'){
        result = num1 / num2;
    }
    alert(num1 + operator +num2 +' = ' + result);
}



