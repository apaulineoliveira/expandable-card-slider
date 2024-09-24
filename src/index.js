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


let currentIndex = 0; // Índice atual dos cartões visíveis
const items = document.querySelectorAll('.item'); // Seleciona todos os cartões

document.querySelector('.show-more').addEventListener('click', () => {
  // Oculta o cartão ativo
  if (currentIndex < items.length) {
    items[currentIndex].classList.remove('active');
    currentIndex++;
    
    // Se houver mais cartões, ativa o próximo
    if (currentIndex < items.length) {
      items[currentIndex].classList.add('active');
    }
  }
});
