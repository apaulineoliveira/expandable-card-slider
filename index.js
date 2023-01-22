const items = document.querySelectorAll('.item')

items.forEach(item =>{
  item.addEventListener('click',() => {
      removeActionClasses()
      item.classList.add('active')
  })
})

function removeActionClasses(){
    items.forEach(item =>{
        item.classList.remove('active')
    })
}