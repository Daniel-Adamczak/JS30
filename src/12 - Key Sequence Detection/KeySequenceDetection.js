window.addEventListener('keyup',keySequenceHandler)
let keySequenceArray =[];
let secretCode='wesbos'
function keySequenceHandler(event) {

keySequenceArray.push(event.key)
if(keySequenceArray.length>secretCode.length){
keySequenceArray.shift()
}
console.log(keySequenceArray.join(''))
if(keySequenceArray.join('')===secretCode){
    cornify_add()
}
}