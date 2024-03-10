const win = document.querySelector('.window');
const input = document.querySelector('.window__input');
const close = document.querySelector('.window__button--close');
const min = document.querySelector('.window__button--minimize');
const max = document.querySelector('.window__button--maximize');

const activateText = () => {
  win.classList.add('is-active');
}

const deActivateText = () => {
  win.classList.remove('is-active');
}

const toggleMaximize = () => {
  win.classList.toggle('is-maximized');
}

const toggleMinimize = () => {
  win.classList.toggle('is-minimized');
}

const closeWin = () => {
  win.outerHTML = ''; // :'(
}

function dragElement(el) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  el.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
   
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    // Only move window if not targeting the text input
    if(!e.target.matches('.window__input')) {
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag; 
    }
  }

  function elementDrag(e) {
    e = e || window.event;
    
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    el.style.top = (el.offsetTop - pos2) + "px";
    el.style.left = (el.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(win);

input.addEventListener('focusin', activateText);
input.addEventListener('blur', deActivateText);
max.addEventListener('click', toggleMaximize);
min.addEventListener('click', toggleMinimize);
close.addEventListener('click', closeWin);
