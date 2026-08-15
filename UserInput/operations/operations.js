
/*This is an alternative for the Radio Button in the HTML
 if you dont include the 'name' property in  <input> then this logic shall be written */

/* 
  let currentRadio = null;

  function toggleRadio(radio) {
     if (currentRadio === radio) {
       // If the user clicks the ALREADY selected button, uncheck it
       radio.checked = false;
       currentRadio = null;
     } else {
       // Otherwise, remember this new button as the active one
       currentRadio = radio;
     }
   }
*/


//operation begins whenever the user clicks Calculate Buttton
  document.getElementById('Calci').onclick = function()
{
let Number1 = Number(document.getElementById('Num1').value)  //fetch the value of first number (userInput)
let Number2 = Number(document.getElementById('Num2').value)  //fetch the value of second number (userInput)

//if user selects the radio button labeled 'addition'
if(document.getElementById('addition').checked === true)
{
  document.getElementById('parah').textContent = Number1 + Number2 ; //print the sum value using <p> tag
}

//if user selects the radio button labeled 'substraction'
else if(document.getElementById('substraction').checked === true)
{
  document.getElementById('parah').textContent = Number1 - Number2 ; //print the difference value using <p> tag
}

//if user selects the radio button labeled 'multiplication'
else if(document.getElementById('multiplication').checked === true)
{
  document.getElementById('parah').textContent = Number1 * Number2 ; //print the product value using <p> tag
}
}

