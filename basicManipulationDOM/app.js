/*Creating an element */

const ParagraphElem = document.createElement('p')
ParagraphElem.innerText = "hey this line is dynamically created"
document.body.appendChild(ParagraphElem)
// console.log(ParagraphElem)

/*Inserting an element*/

const SpanEle = document.createElement('span')
SpanEle.innerText = "this is span inserted"
const parelem = document.querySelector('p')
document.body.insertBefore(SpanEle,parelem)
