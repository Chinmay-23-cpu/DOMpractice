
let counter = 0;
document.getElementById('inc').onclick = ()=>
{
  counter++;
  document.getElementById('Counter').textContent = counter;
}

document.getElementById('re').onclick = ()=>
{
  counter = 0;
  document.getElementById('Counter').textContent = counter;
}

document.getElementById('de').onclick = ()=>
{
  counter--;
  document.getElementById('Counter').textContent = counter;
}



