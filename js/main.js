let colorTag=document.querySelector('.first');
colorTag.style.color='red'

let changedTag = document.querySelector('.second');
window.addEventListener('click',changeText);
function changeText(){
  changedTag.innerHTML='You should buy it!' ;
}

document.body.insertAdjacentHTML ("beforebegin",'<div class="newEl"></div>')
