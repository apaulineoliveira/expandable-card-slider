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