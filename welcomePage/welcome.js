
document.getElementById("SubmitButton").onclick = function()
{
let inputvalue = document.getElementById('Texthere').value;
console.log(inputvalue)
document.getElementById("para").textContent = `Hello there ${inputvalue}!  Welcome to the page `
}

