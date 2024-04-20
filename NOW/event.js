const buttons = document.querySelectorAll('a.page-link');
const divs = document.querySelectorAll('.box_wrap div');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    // deactivate all buttons
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('active');
    }
    // activate current button
    buttons[i].classList.add('active');
    // hide all divs
    for (let j = 0; j < divs.length; j++) {
      divs[j].classList.remove('active');
    }
    // show corresponding div
    divs[i].classList.add('active');
  });
}