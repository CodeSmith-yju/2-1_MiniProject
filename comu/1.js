document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
//마우스를 올리면 배경이 흑색으로 변하고 떼면 다시 원래색으로 변함//
  let play = document.querySelectorAll("#play > div");
    for(let i = 0; i < play.length; i++){
        play[i].onmouseover=function(){
            this.classList.add("bg");
        }
        play[i].onmouseout=function(){
            this.classList.remove("bg");
        }
    }


})

function toggleBox(boxId, button) {
  var box = document.getElementById(boxId);
  box.classList.toggle('active');

  var otherBoxes = document.querySelectorAll('.box:not(#' + boxId + ')');
  for (var i = 0; i < otherBoxes.length; i++) {
      otherBoxes[i].classList.remove('active');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper(".mySwipers", {
      centeredSlides: true,
      loop: true,
      autoplay: {
          delay: 4000,
          disableOnInteraction: false,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });
});


window.addEventListener('DOMContentLoaded', () => {
  const scroll_img = document.querySelector('.scroll_img');
  const scrollLeftButton = document.querySelector('.scroll-button.left');
  const scrollRightButton = document.querySelector('.scroll-button.right');
  let isScrolling = false;
  let startX;
  let scrollLeft;
  
  scrollLeftButton.addEventListener('mousedown', () => {
      startScroll(-1);
  });
  
  scrollRightButton.addEventListener('mousedown', () => {
      startScroll(1);
  });
  
  scrollLeftButton.addEventListener('mouseup', stopScroll);
  scrollRightButton.addEventListener('mouseup', stopScroll);
  
  scrollLeftButton.addEventListener('mouseleave', stopScroll);
  scrollRightButton.addEventListener('mouseleave', stopScroll);
  
  scroll_img.addEventListener('mousedown', (e) => {
      isScrolling = true;
      startX = e.pageX - scroll_img.offsetLeft;
      scrollLeft = scroll_img.scrollLeft;
      scroll_img.style.cursor = 'grabbing';
  });
  
  scroll_img.addEventListener('mouseup', () => {
      isScrolling = false;
      scroll_img.style.cursor = 'grab';
  });
  
  scroll_img.addEventListener('mouseleave', () => {
      isScrolling = false;
      scroll_img.style.cursor = 'grab';
  });
  
  scroll_img.addEventListener('mousemove', (e) => {
      if (!isScrolling) return;
      e.preventDefault();
      const x = e.pageX - scroll_img.offsetLeft;
      const walk = (x - startX) * 3;
      scroll_img.scrollLeft = scrollLeft - walk;
  });
  
  function startScroll(direction) {
      isScrolling = true;
      scrollContainer(direction);
  }
  
  function stopScroll() {
      isScrolling = false;
  }
  
  function scrollContainer(direction) {
      const currentScrollLeft = scroll_img.scrollLeft;
      const itemWidth = scroll_img.clientWidth;
      const scrollDistance = itemWidth * direction;
      const targetScrollLeft = currentScrollLeft + scrollDistance;
      
      scroll_img.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth'
      });
      
      if (isScrolling) {
          setTimeout(() => {
              scrollContainer(direction);
          }, 300);
      }
  }
  
  scroll_img.addEventListener('scroll', () => {
      if (scroll_img.scrollLeft === 0) {
          scrollLeftButton.classList.add('disabled');
      } else {
          scrollLeftButton.classList.remove('disabled');
      }
      
      if (scroll_img.scrollLeft + scroll_img.clientWidth === scroll_img.scrollWidth) {
          scrollRightButton.classList.add('disabled');
      } else {
          scrollRightButton.classList.remove('disabled');
      }
  });
});s


