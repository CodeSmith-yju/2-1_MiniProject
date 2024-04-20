var currentSlide = 1;
var totalSlides = 11;
var isSlideshowRunning = true;
var slideshowTimeout; // 슬라이드 전환을 위한 타임아웃 변수 추가

function changeImage(imageIndex) {
  // 클릭한 이미지의 경로 가져오기
  var smallImage = document.getElementsByClassName("slideimg")[imageIndex - 1].getElementsByTagName("img")[0];
  var newImageSrc = smallImage.getAttribute("src");

  // 큰 갤러리 이미지 변경
  var bigImage = document.getElementsByClassName("player_active")[0];

  // 유튜브 플레이어를 재생할 경우
  if (imageIndex === 1) {
    bigImage.innerHTML = '<div class="player_active" data-layer="0">' +
      '<iframe width="1088" height="612" src="https://www.youtube.com/embed/s-Eyd2SpMr8?autoplay=1&mute=1" title="video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' +
      '</div>';

    // 첫 번째 대기 시간 설정 (1분 33초)
    var delay = 93000; // 1분 33초 (93,000ms)

    // 일정 시간 후에 다음 슬라이드로 자동 전환
    slideshowTimeout = setTimeout(function() {
      if (isSlideshowRunning) {
        changeImage(2); // 2번째 슬라이드부터 메인 이미지로 전환
      }
    }, delay);
  } else {
    // 일반 이미지를 서서히 나타내는 효과 추가
    bigImage.innerHTML = '<img src="' + newImageSrc + '" style="width: 1088px; height: 612px; opacity: 0;">';
    var imageElement = bigImage.getElementsByTagName("img")[0];
    imageElement.style.transition = 'opacity 2.5s';
    setTimeout(function() {
      imageElement.style.opacity = 1;
    }, 100);

    // 일정 시간 후에 다음 슬라이드로 자동 전환
    if (imageIndex === totalSlides) {
      currentSlide = 1; // 다음 슬라이드는 1번으로
    } else {
      currentSlide = imageIndex + 1; // 다음 슬라이드는 현재 슬라이드의 다음 번호
    }

    slideshowTimeout = setTimeout(function() {
      if (isSlideshowRunning) {
        changeImage(currentSlide);
      }
    }, 5000); // 5초 후에 전환 (5000ms)
  }
}

window.addEventListener('load', function() {
  var image = document.querySelector('.indie_slider_big img');
  image.style.width = '1088px';
  image.style.height = '612px';

  // 초기에 5초 후에 첫 번째 슬라이드로 전환
  slideshowTimeout = setTimeout(function() {
    if (isSlideshowRunning) {
      changeImage(1); // 1번째 슬라이드부터 시작
    }
  }, 5000); // 5초 후에 전환 (5000ms)
});

// 이미지 클릭 시 슬라이드 쇼 중지 및 재개
var galleryImages = document.getElementsByClassName("slideimg");
for (var i = 0; i < galleryImages.length; i++) {
  galleryImages[i].addEventListener('click', function() {
    isSlideshowRunning = !isSlideshowRunning; // 슬라이드 쇼 상태 변경

    // 대기 시간 초기화
    clearTimeout(slideshowTimeout);
    slideshowTimeout = setTimeout(function() {
      if (isSlideshowRunning) {
        changeImage(currentSlide); // 현재 슬라이드부터 시작
      }
    }, 5000); // 5초 후에 전환 (5000ms)
  });
}

//--------------------버튼 클릭시 slider div 요소 움직이게 만들기
const sliderWrapper = document.querySelector('.indie_slider_small_wrap');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let marginLeftValue = 0;

function moveSlider(value) {
  var slider = document.querySelector('.slider_flex');
  var currentValue = parseInt(slider.style.marginLeft) || 0;
  var nextValue = currentValue + value;
  var minValue = -69;
  var maxValue = 0;

  if (nextValue < minValue) {
    nextValue = minValue;
  } else if (nextValue > maxValue) {
    nextValue = maxValue;
  }

  slider.style.marginLeft = nextValue + '%';
}

// 이미지 클릭 시 슬라이드 쇼 중지 및 재개
var galleryImages = document.getElementsByClassName("slideimg");
for (var i = 0; i < galleryImages.length; i++) {
  galleryImages[i].addEventListener('click', function() {
    isSlideshowRunning = !isSlideshowRunning; // 슬라이드 쇼 상태 변경
  });
}

