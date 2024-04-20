document.addEventListener('DOMContentLoaded', function() {  
    document.addEventListener('click', function(e) { // PC게임 메뉴와 모바일게임 메뉴 버튼, 언어 버튼, 모든메뉴 버튼, 로그아웃 드롭다운 버튼 이외에 누르면 드롭다운 메뉴가 닫히게 하는 코드
        var target = e.target;

        if (!target.closest('#pcmenu, #mobamenu, #lang, #allmenu')) {
            var sections = document.querySelectorAll('#toggle, #lang, #allmenu');
            sections.forEach(function(section) {
                section.classList.remove('open1');
                section.classList.remove('open2');
                section.classList.remove('open');
            });

        
        }
     });

    // 드롭다운 메뉴
    const dropdowns = [
    { link: document.getElementById('pcmenu'), sect: document.getElementById('toggle'), class: 'open1' },
    { link: document.getElementById('mobamenu'), sect: document.getElementById('toggle'), class: 'open2' },
    { link: document.getElementById('langbutton'), sect: document.getElementById('lang'), class: 'open' },
    { link: document.getElementById('menubutton'), sect: document.getElementById('allmenu'), class: 'open' }
    ];
     
    // 다른 드롭다운 메뉴와 같이 나오게 하지 않기 위한 코드
    dropdowns.forEach((dropdown) => {
        dropdown.link.addEventListener('click', (e) => {
            dropdown.sect.classList.toggle(dropdown.class);
            dropdowns.filter((d) => d !== dropdown).forEach((d) => d.sect.classList.remove(d.class));
            e.preventDefault();
        });
    });

})