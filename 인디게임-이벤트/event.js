//div 정렬 스크립트

function dropdown(){
    var dropdowns = document.getElementsByClassName("dropdown-content")[0];
    if(dropdowns.style.visibility=='hidden'){
        dropdowns.style.visibility='visible';
    } else{
        dropdowns.style.visibility='hidden';
    }
}

// 이벤트 정보를 담을 클래스 정의
class eventCard {
    constructor (imgSrc, text, recount, date, view){
        this.imgSrc = imgSrc;
        this.text = text;
        this.recount = recount;
        this.date = date;
        this.view = view;
    }
}

// 이벤트 목록을 담을 array eventArr
var eventArr = new Array();
// 이벤트 목록 저장
eventArr.push(new eventCard("./EVENTIMG/회색낙원이벤트.jpg", "[사전구매]미소녀 중심 게임 '회색낙원'", "[4]", "2023.05.04 ~ 2023.05.19", "2297"));
eventArr.push(new eventCard("./EVENTIMG/랜채그이벤트.jpg", "러브인 로그인 로즈데이 컬렉션", "[37]", "2023.05.02 ~ 2023.05.16", "8754"));
eventArr.push(new eventCard("./EVENTIMG/5월 스토브 핫위크.jpg", "5월 스토브 핫위크🎢", "[31]", "2023.05.01 ~ 2023.05.07", "3967"));
eventArr.push(new eventCard("./EVENTIMG/쿠폰이벤트.jpg", "5월 써드 파티 쿠폰", "[43]", "2023.05.01 ~ 2023.05.31", "1574"));
eventArr.push(new eventCard("./EVENTIMG/쿠폰3장이벤트.jpg", "5월 스토브 쿠폰존", "[5]", "2023.05.01 ~ 2023.05.31", "3517"));
eventArr.push(new eventCard("./EVENTIMG/썸네일356x200_보너수데이_1682674431688.jpg", "PLAYX4에서 스토브랑 놀 준비 됐어?", "[4]", "2023.04.28 ~ 2023.05.07", "3315"));
eventArr.push(new eventCard("./EVENTIMG/슬데 이벤트.jpg", "슬기로운 데모생활 커뮤니티 오픈", "", "2023.04.26 ~ 2023.05.31", "118"));
eventArr.push(new eventCard("./EVENTIMG/가짜하트 런칭 이벤트.png", "🎊가짜하트 런칭 이벤트", "[47]", "2023.04.25 ~ 2023.05.09", "1101"));
eventArr.push(new eventCard("./EVENTIMG/[Series L] 최애의 러브보다 사랑의 러브 후속편.jpg", "[Series L] 최애의 러브보다 사랑의 러브 후속편", "[5]", "2023.04.24 ~ 2023.05.08", "6405"));
eventArr.push(new eventCard("./EVENTIMG/신한이벤트.png", "신한Play X 스토브 게임 매거진", "[3]", "2023.04.11 ~ 2023.12.31", "495"));
eventArr.push(new eventCard("./EVENTIMG/4월신작이벤트.png", "스토브인디 4월 신작 모아보기", "", "2023.04.01 ~ 2023.05.31", "119"));
eventArr.push(new eventCard("./EVENTIMG/데모게임이벤트.jpg", "이 게임 재밌을까? 궁금할 땐 데모게임", "[2]", "2023.01.27 ~ 2023.12.31", "1776"));
eventArr.push(new eventCard("./EVENTIMG/데모참여이벤트.jpg", "슬기로운 데모생활 참여 게임 모음", "[9]", "2023.01.27 ~ 2023.12.31", "1782"));
eventArr.push(new eventCard("./EVENTIMG/티끌모아태산이벤트.png", "보상 UPGRADE! 티끌 모아 태산!", "[16]", "2023.01.05 ~ 2099.09.09", "10272"));
eventArr.push(new eventCard("./EVENTIMG/많관부이벤트.jpg", "신작들! 출시함!! 많관부!!!", "[6]", "2022.12.06 ~ 2023.12.31", "5960"));
eventArr.push(new eventCard("./EVENTIMG/비주얼노벨게임모아보기.jpg", "비주얼노벨 모아보기", "[5]", "2022.12.01 ~ 2023.12.31", "21490"));
eventArr.push(new eventCard("./EVENTIMG/액션어드밴쳐모음.jpg", "액션/어드밴쳐 모아보기", "[3]", "2022.12.01 ~ 2023.12.31", "3470"));
eventArr.push(new eventCard("./EVENTIMG/RPG게임모음.jpg", "RPG 모아보기", "[4]", "2022.12.01 ~ 2023.12.31", "7160"));




// 종료임박순 정렬
// map을 이용하여 배열 복사 (얕은 복사)
var eventArr2 = eventArr.map((item) => item);

// .sort(function (a, b) { return a - b });는 배열을 오름차순으로 정렬하고
// .sort(function (a, b) { return b - a });는 배열을 내림차순으로 정렬한다.
eventArr2.sort(function(a, b){
    var aYear = parseInt(a.date.substr(13,4));
    var aMon = parseInt(a.date.substr(18,2));
    var aDate = parseInt(a.date.substr(21, 2));
    var bYear = parseInt(b.date.substr(13,4));
    var bMon = parseInt(b.date.substr(18,2));
    var bDate = parseInt(b.date.substr(21, 2));
    
    if(aYear!=bYear){
        return aYear-bYear;
    }
    if(aMon != bMon){
        return aMon - bMon;
    }
    return aDate - bDate;
});

// 늦은종료순 정렬
var eventArr3 = eventArr.map((item) => item);
eventArr3.sort(function(a, b){
    var aYear = parseInt(a.date.substr(13,4));
    var aMon = parseInt(a.date.substr(18,2));
    var aDate = parseInt(a.date.substr(21, 2));
    var bYear = parseInt(b.date.substr(13,4));
    var bMon = parseInt(b.date.substr(18,2));
    var bDate = parseInt(b.date.substr(21, 2));
    if(aYear!=bYear){
        return bYear-aYear;
    } 
    if(aMon != bMon){
        return bMon - aMon;
    }
    return bDate - aDate;
});

function showMenu(number){
    if(number==1){
        for(var i=0;i<eventArr.length;i++){
            // card div 클래스 이름 --> id (ex card12)
            var id = "card" + i;
            // 하나의 카드 div
            var cardObject = document.getElementById(id);
            // 각 카드 div 내 바꿀 요소들
            var text = cardObject.getElementsByClassName("tit_txt")[0];
            var recount = cardObject.getElementsByClassName("recount")[0];
            var data = cardObject.getElementsByClassName("data")[0];
            var view = cardObject.getElementsByClassName("view")[0];
            var img = cardObject.getElementsByClassName("imgId")[0];
            // 변경
            text.innerHTML = eventArr[i].text;
            recount.innerHTML = eventArr[i].recount;
            data.innerHTML = eventArr[i].date;
            view.innerHTML = '<ion-icon name="eye-outline"></ion-icon>' + eventArr[i].view;
            img.src = eventArr[i].imgSrc;
        }
    } else if(number==2){
        for(var i=0;i<eventArr2.length;i++){
            var id = "card" + i;
            var cardObject = document.getElementById(id);
            var text = cardObject.getElementsByClassName("tit_txt")[0];
            var recount = cardObject.getElementsByClassName("recount")[0];
            var data = cardObject.getElementsByClassName("data")[0];
            var view = cardObject.getElementsByClassName("view")[0];
            var img = cardObject.getElementsByClassName("imgId")[0];
            text.innerHTML = eventArr2[i].text;
            recount.innerHTML = eventArr2[i].recount;
            data.innerHTML = eventArr2[i].date;
            view.innerHTML = '<ion-icon name="eye-outline"></ion-icon>'+ eventArr2[i].view;
            img.src = eventArr2[i].imgSrc;
        }
    } else{
        for(var i=0;i<eventArr3.length;i++){
            var id = "card" + i;
            var cardObject = document.getElementById(id);
            var text = cardObject.getElementsByClassName("tit_txt")[0];
            var recount = cardObject.getElementsByClassName("recount")[0];
            var data = cardObject.getElementsByClassName("data")[0];
            var view = cardObject.getElementsByClassName("view")[0];
            var img = cardObject.getElementsByClassName("imgId")[0];
            text.innerHTML = eventArr3[i].text;
            recount.innerHTML = eventArr3[i].recount;
            data.innerHTML = eventArr3[i].date;
            view.innerHTML = '<ion-icon name="eye-outline"></ion-icon>'+ eventArr3[i].view;
            img.src = eventArr3[i].imgSrc;
        }
    }
    // 드롭다운 없애고
    var dropdowns = document.getElementsByClassName("dropdown-content")[0];
    dropdowns.style.visibility='hidden';
    var dropdownsContent = document.getElementsByClassName("dropbtn_content")[0];
    // 이름바꾸기
    if(number==1){
        dropdownsContent.innerHTML="최근시작일순";
    } else if(number==2){
        dropdownsContent.innerHTML="종료임박순";
    } else{
        dropdownsContent.innerHTML="늦은종료순";
    }
}

window.onscroll = function() {scrollFunction()};
            function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("myBtn").style.display = "block";
            } else {
                document.getElementById("myBtn").style.display = "none";
            }
            }
        
        function topFunction() {
          document.documentElement.scrollTop = 0;
        }


        
//헤더부분
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

function toggleBox(boxId, button) {
    var box = document.getElementById(boxId);
    box.classList.toggle('active');

    var otherBoxes = document.querySelectorAll('.box:not(#' + boxId + ')');
    for (var i = 0; i < otherBoxes.length; i++) {
      otherBoxes[i].classList.remove('active');
    }
  }

  //슬라이더 연동, 변수 선언
  const slider = document.querySelector('.scheduler-scroll');
  let isMouseDown = false;
  let startX, scrollLeft;

  //마우스를 창 밖으로 보내면 작동 x
  slider.addEventListener('mouseleave', () => {
    isMouseDown = false;
    slider.classList.remove('active');
  });

  //마우스 좌클릭을 하고있지 않으면 작동 x
  slider.addEventListener('mouseup', () => {
    isMouseDown = false;
    slider.classList.remove('active');
  });

  //드래그 시작 위치 파악하기
  slider.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    slider.classList.add('active');
    //드래그 시작지점의 x좌표를 startX에 저장하고
    //슬라이더가 얼마나 스크롤 되었는지 scrollLeft에 저장
    //e.pageX = 전체 페이지에서 마우스의 x좌표
    //slider.offsetLeft = 슬라이더의 left 좌표이므로
    //슬라이더 안에서의 x좌표를 얻을 수 있다.
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  //드래그 한 거리를 스크롤로 전환하기
  slider.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
  });

    // 스크롤 이벤트 처리
    window.onscroll = function() {
        scrollFunction()
    };

    // 스크롤 처리 함수
    function scrollFunction() {
        // 만약 body 또는 documentElement의 scrollTop 값이 20보다 크다면
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            // id가 "myBtn"인 요소의 display 속성을 "block"으로 설정하여 보이게 함
            document.getElementById("myBtn").style.display = "block";
        } else {
            // id가 "myBtn"인 요소의 display 속성을 "none"으로 설정하여 숨김
            document.getElementById("myBtn").style.display = "none";
        }
    }

    // 페이지 상단으로 이동하는 함수
    function topFunction() {
        // documentElement의 scrollTop 값을 0으로 설정하여 페이지를 상단으로 이동시킴
        document.documentElement.scrollTop = 0;
    }


//상단 슬라이드
const slides = document.querySelector('.slides'); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll('.slides li'); //모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideImg.length; // 슬라이드 개수
const prev = document.querySelector('.prev'); //이전 버튼
const next = document.querySelector('.next'); //다음 버튼

function moveSlide(num) {
// 슬라이드 한칸의 너비 = 390
slides.style.left = -num * 390 + 'px';
currentIdx = num;
}

prev.addEventListener('click', function () {
/*첫 번째 슬라이드로 표시 됐을때는
이전 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==0일때만 moveSlide 함수 불러옴 */
if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener('click', function () {
/* 마지막 슬라이드로 표시 됐을때는
다음 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==slideCount - (한 화면에 보이는 슬라이드 개수) 일때만
moveSlide 함수 불러옴 */
if (currentIdx !== slideCount - 4) {
    moveSlide(currentIdx + 1);
}
});