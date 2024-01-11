const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

const items = [];
if (localStorage.getItem('items')) {
  items.push(...JSON.parse(localStorage.getItem('items')));
  console.log(items);
  displayItems();
}
function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('[name=item]').value;
  let dish = {
    text,
    checked: false,
  };
  items.push(dish);
  displayItems();
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}
function displayItems() {
  let dishesToDisplay = items
    .map((dish, i) => {
      return `<li class="border-b-[1px_solid_rgba(0,0,0,0.2)] p-[0_10px] font-light flex flex-row justify-between  w-full">
        
        <input type="checkbox" name='dish'  class="  " id='item${i}' ${
        dish.checked ? 'checked' : ''
      }>
        <label for='item${i}' class="flex-1 cursor-pointer text-center">${
        dish.text
      }</label>
      </li>
        `;
    })
    .join('');
  console.log(dishesToDisplay);
  itemsList.innerHTML = dishesToDisplay;
}

addItems.addEventListener('submit', addItem);
