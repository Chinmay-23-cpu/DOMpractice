/*Creating an element */

const ParagraphElem = document.createElement('p')
ParagraphElem.innerText = "hey this line is dynamically created and appended using appendChild()"
document.body.appendChild(ParagraphElem)
// console.log(ParagraphElem)

/*Inserting an element*/

// const SpanEle = document.createElement('span')
// SpanEle.innerText = "this is span inserted"
// const parelem = document.querySelector('p')
// document.body.insertBefore(SpanEle,parelem)

const BoldText = document.createElement('b')
BoldText.innerText = "This is Bold statement"
const Italia = document.querySelector('i')
const parentofItalia = Italia.parentElement; //cuz the 'i' is inside the div container and the document cannot directly find 'i' without knowing its parent
document.body.insertBefore(BoldText,parentofItalia)