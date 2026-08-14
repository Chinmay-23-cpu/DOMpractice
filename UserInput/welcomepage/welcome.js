
document.getElementById("SubmitButton").onclick = function()
{
let inputvalue = document.getElementById('Texthere').value;
let inputvalue2 = document.getElementById('Texthere2').value;

if(inputvalue2.value === ' ' || isNaN(inputvalue2))
{
    document.getElementById("para").textContent = "Please enter a valid number"
}
else
{
    document.getElementById("theHead").textContent = `Welcome ${inputvalue}!` 
    document.getElementById("para").textContent = `Your age is ${inputvalue2}. And once again Welcome to the page!!!` 
}

}

