function ClickOnMe() 
{
    const sike = document.querySelector('#maintag')
    // sike.style.backgroundColor ='yellow'

    if (sike.style.color === 'red') {
    sike.style.color = ''; // Empties the inline style, reverting to normal CSS
  } else {
    sike.style.color = 'red'; // Turns it yellow
  }
}