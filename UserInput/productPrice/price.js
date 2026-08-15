document.getElementById('total').onclick = () =>
{
    const Quantity = Number(document.getElementById('Qty').value)
    const price = Number(document.getElementById('Price').value)
    const discountDecimal = Number((document.getElementById('percent').value))/100; //percentage to decimal 
    document.getElementById('answer').textContent = (Quantity * price)-(Quantity * price * discountDecimal); // original price - discount value

}