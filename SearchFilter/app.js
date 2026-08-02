function SearchFilter()
{
    const inputBox = document.getElementById('SearchIt');
    const UserValue = inputBox.value;
    const GivenList = document.querySelectorAll('#TheList li')

    GivenList.forEach((item)=>{
        let text = item.innerText;
         text = text.toLowerCase();
        let inputVal = UserValue.toLowerCase();
        let found = text.includes(inputVal)
         if(found)
         {
            item.style.display = 'block'
         }
         else
         {
            item.style.display = 'none'
         }
    })
}

