const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let previouslyChecked
function checkboxClickHandler(event) {
   console.log(previouslyChecked)
   
console.log(event);
let ifBetween=false;
checkboxes.forEach((checkbox)=>{
   if(previouslyChecked)
  { if(checkbox===previouslyChecked&&previouslyChecked.checked){
      ifBetween=!ifBetween;
   }
   if(checkbox===this&&previouslyChecked.checked){
      ifBetween=!ifBetween;
   }
if(event.shiftKey&&ifBetween){
   console.log("checking the unchecked checkboxes between")
checkbox.checked=true;
}
}
   console.log(ifBetween)
   
})

previouslyChecked=this;
}


checkboxes.forEach(checkbox =>checkbox.addEventListener('click',checkboxClickHandler)
   )