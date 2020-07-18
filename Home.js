var addition = document.getElementById('addition');
var subtraction = document.getElementById('subtraction');
var multiplication = document.getElementById('multiplication');
var divide = document.getElementById('divide');
var modulus = document.getElementById('modulus');


var firstnumber = document.getElementById('firstnumber');
var secondnumber = document.getElementById('secondnumber');

var result1 = document.getElementById('result1');
var result2 = document.getElementById('result2');
var result3 = document.getElementById('result3');
var result4 = document.getElementById('result4');
var result5 = document.getElementById('result5');

var form = document.getElementById('form');

var mycalculation = function(jin){
	if(addition.checked || subtraction.checked || multiplication.checked || divide.checked || modulus.checked){
   
         if(addition.checked){

                if(!firstnumber.value || !secondnumber.value){
                	 alert('please enter any integer')
                }
                else{
                     var a1 = parseFloat(firstnumber.value);
                     var b1 = parseFloat(secondnumber.value);

                     var output1 = a1 + b1;

                     result1.innerText = "Addition : "+ output1;
                     jin.preventDefault(); 
                }

         } 
         if(subtraction.checked){

                if(!firstnumber.value || !secondnumber.value){
                	 alert('please enter any integer')
                }
                else{
                     var a2 = parseFloat(firstnumber.value);
                     var b2 = parseFloat(secondnumber.value);

                     var output2 = a2 - b2;

                     result2.innerText = "Subtraction : "+ output2;
                     jin.preventDefault(); 
                }

         } 
         if(multiplication.checked){

                if(!firstnumber.value || !secondnumber.value){
                	 alert('please enter any integer')
                }
                else{
                     var a3 = parseFloat(firstnumber.value);
                     var b3 = parseFloat(secondnumber.value);

                     var output3 = a3 * b3;

                     result3.innerText = "Multiplication : "+ output3;
                     jin.preventDefault(); 
                }

         } 
         if(divide.checked){

                if(!firstnumber.value || !secondnumber.value){
                	 alert('please enter any integer')
                }
                else{
                     var a4 = parseFloat(firstnumber.value);
                     var b4 = parseFloat(secondnumber.value);

                     var output4 = a4 / b4;

                     result4.innerText = "Divide : "+ output4;
                     jin.preventDefault(); 
                }

         } 
         if(modulus.checked){

                if(!firstnumber.value || !secondnumber.value){
                	 alert('please enter any integer')
                }
                else{
                     var a5 = parseFloat(firstnumber.value);
                     var b5 = parseFloat(secondnumber.value);

                     var output5 = a5 % b5;

                     result5.innerText = "Modulus : "+ output5;
                     jin.preventDefault(); 
                }

         } 

	}
	else if(!addition.checked && !subtraction.checked && !multiplication.checked && !divide.checked && !modulus.checked){
		alert('Please select type of calculation');
	}
}
form.addEventListener('submit', mycalculation);