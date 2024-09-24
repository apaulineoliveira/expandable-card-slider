const ITEMS = document.querySelectorAll('.item')

ITEMS.forEach(item =>{
  item.addEventListener('click',() => {
      removeActionClasses()
      item.classList.add('active')
  })
})

function removeActionClasses(){
    ITEMS.forEach(item =>{
        item.classList.remove('active')
})}


let currentIndex = 0; 
const items = document.querySelectorAll('.item');

document.querySelector('.show-more').addEventListener('click', () => {
 
  if (currentIndex < items.length) {
    items[currentIndex].classList.remove('active');
    currentIndex++;
    
   
    if (currentIndex < items.length) {
      items[currentIndex].classList.add('active');
    }
  }
});
