const openBlocks = document.querySelectorAll('.openBlock'),
      btnOpen = document.querySelectorAll('.openButton'), 
      checkBtns = document.querySelectorAll('[data-check]'), 
      blockTasks = document.querySelectorAll('.blockTasks'), 
      navLinks = document.querySelectorAll('[data-switch]'),
      mainBlocks = document.querySelectorAll('[data-main]');

// Attach event listeners to each openButton
btnOpen.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        openBlocks[index].classList.toggle('open');
    });
});

checkBtns.forEach((btn, index1) => {
    btn.addEventListener('click', () =>{
        blockTasks[index1].classList.toggle('checked')
    });
});


navLinks.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        mainBlocks.forEach((block) => block.classList.remove('showBlock'));
        mainBlocks[index].classList.add('showBlock');
    });
});