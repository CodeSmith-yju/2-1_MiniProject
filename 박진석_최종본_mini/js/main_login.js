document.addEventListener('DOMContentLoaded', function() {  
    document.addEventListener('click', function(e) { // PC게임 메뉴와 모바일게임 메뉴 버튼, 언어 버튼, 모든메뉴 버튼, 로그아웃 드롭다운 버튼 이외에 누르면 드롭다운 메뉴가 닫히게 하는 코드
        var target = e.target;

        // 문서를 클릭할 때 해당 클래스, 아이디 요소가 아니라면 모든 드롭다운 메뉴에 있는 'open' 관련 클래스를 모두 제거하여 드롭다운 메뉴를 끄게 하는 기능.
        if (!target.closest('#pcmenu, #mobamenu, #lang, #allmenu, .btn-user')) {
            var sections = document.querySelectorAll('#toggle, #lang, #allmenu, .logout');
            sections.forEach(function(section) {
                section.classList.remove('open1');
                section.classList.remove('open2');
                section.classList.remove('open');
                section.classList.remove('logout_open');
            });

        
        }
     });

    // 드롭다운 메뉴에 관련한 클래스들을 담아놓은 배열
    const dropdowns = [
    { link: document.getElementById('pcmenu'), sect: document.getElementById('toggle'), class: 'open1' },
    { link: document.getElementById('mobamenu'), sect: document.getElementById('toggle'), class: 'open2' },
    { link: document.getElementById('langbutton'), sect: document.getElementById('lang'), class: 'open' },
    { link: document.getElementById('menubutton'), sect: document.getElementById('allmenu'), class: 'open' },
    { link: document.querySelector('.btn-user'), sect: document.querySelector('.logout'), class: 'logout_open' } // 로그인 후 로그아웃을 위한 드롭다운 메뉴
    ];
     
    // 다른 드롭다운 메뉴와 같이 나오게 하지 않기 위한 코드, 필터를 이용하여 현재 토글 된 드롭다운 메뉴가 아니라면 다른 드롭다운 메뉴에 클래스가 추가 되지 않도록 하는 기능
    dropdowns.forEach((dropdown) => {
        dropdown.link.addEventListener('click', (e) => {
            dropdown.sect.classList.toggle(dropdown.class);
            dropdowns.filter((d) => d !== dropdown).forEach((d) => d.sect.classList.remove(d.class));
            e.preventDefault();
        });
    });

    // 추천게임 버튼을 누르면 클래스 이름이 새로 생성되고 나머지 버튼에 있던 클래스는 삭제하는 것
    // 그에 따라 보여지는 section을 display를 none과 block으로 변경함으로써 바꾸는 기능
    let btn = document.querySelectorAll(".pop-tap");
    let pop_content = document.querySelectorAll(".popgame-guide-img");

    for(let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", () => {
            for(let j = 0; j < btn.length; j++) {
                if(j === i) {
                    btn[j].classList.add("pop_active");
                    pop_content[j].style.display = "block";
                }
                else {
                    btn[j].classList.remove("pop_active");
                    pop_content[j].style.display = "none";
                }
            }
        })
    }

    // 추천 게임 섹션 버튼
    let recbtn = document.querySelectorAll(".recommend-tap > li");
    let recsec  = document.querySelectorAll(".recommend-list-area");

    for(let i = 0; i < recbtn.length; i++) {
        recbtn[i].addEventListener("click", () => {
            for (let j = 0; j < recsec.length; j++) {
                if(j === i) {
                    recbtn[j].classList.add("tap-active");
                    recsec[j].style.display = "block";
                } 
                else {
                    recbtn[j].classList.remove("tap-active");
                    recsec[j].style.display = "none";
                }
              }
        })
    }

    // 추천 게임 섹션 자동 탭 변경 
    let idx = 0;
    let recleng = recbtn.length;
    let timer = null;

    function goToTap(e) {
        for (let i = 0; i < recleng; i++) {
            if (i === e) {
                recbtn[i].classList.add("tap-active");
                recsec[i].style.display = "block";
            } 
            else {
                recbtn[i].classList.remove("tap-active");
                recsec[i].style.display = "none";
            }
        }     
    }

    function startAutoTap() {
        timer = setInterval(function() {
        let nextIdx = (idx + 1) % recleng;
        goToTap(nextIdx);
        idx = nextIdx;
        }, 5000);
    }

    startAutoTap();

    // 추천 게임 섹션에 마우스가 올라갈 시 자동 탭 변경 멈추게 하는 코드
    let stoparea = document.querySelector("#game-recommend");
    stoparea.addEventListener("mouseenter", () => {
        clearInterval(timer);
    })

    stoparea.addEventListener("mouseleave", () => {
        startAutoTap();
    })


    // 전체 게임 섹션 버튼

    let allbtn = document.querySelectorAll(".allgame-tap > li");
    let allsec = document.querySelectorAll(".allgame-list-area");

    for(let i = 0; i < allbtn.length; i++) {
        allbtn[i].addEventListener("click", () => {
            for (let j = 0; j < allsec.length; j++) {
                if(j === i) {
                    allbtn[j].classList.add("tap-active");
                    allsec[j].style.display = "block";
                } 
                else {
                    allbtn[j].classList.remove("tap-active");
                    allsec[j].style.display = "none";
                }
              }
        })
    }


    // 공지사항 자동으로 바뀌는 기능
    let notice_tit_list = ["4/18(화) 카카오페이 결제수단으로 캐시 충전 불가 현상 안내 (정상화)", "5/1(월) 근로자의 날 고객센터 휴무 안내", "5/29(월) 부천님 오신날 대체 공휴일 관련 고객센터 휴무 안내"];
    let notice_link_list = ["https://help.onstove.com/web/notice/noticeDetail/page?seq_no=798&service_no=2017080100", 
                    "https://help.onstove.com/web/notice/noticeDetail/page?page_no=1&seq_no=802&service_no=2017080100",  
                    "https://help.onstove.com/web/notice/noticeDetail/page?page_no=1&seq_no=805&service_no=2017080100"];
    let notice_idx = 0;
    let notice_timer = null;

    let notice_link = document.querySelector(".notice-link");
    let notice_tit = document.querySelector(".notice-link > span");
    let notice_length = notice_tit_list.length;

    function autoNotice(index) {
        for(let i = 0; i < notice_length; i++) {
            if(i === index) {
                notice_link.setAttribute("href", notice_link_list[i]);
                notice_tit.innerHTML = notice_tit_list[i];
            }
        }
    }


    function startAutochg() {
        notice_timer = setInterval(function() {
        let notice_nextIdx = (notice_idx + 1) % notice_length;
        autoNotice(notice_nextIdx);
        notice_idx = notice_nextIdx;
        }, 5000);
    }

    startAutochg();

})