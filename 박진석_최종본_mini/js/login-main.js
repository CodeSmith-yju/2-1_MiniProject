window.onload = function() {

    // 로그인 탭 변경 기능
    let tap_btn = document.querySelectorAll(".tab-item > button");
    let tap_body = document.querySelectorAll(".login-mainbody");


    for (let i = 0; i < tap_btn.length; i++) {
        tap_btn[i].addEventListener('click', () => {
            for (let j = 0; j < tap_btn.length; j++) {
                if (i === j) {
                    tap_btn[j].classList.remove('btn-non-active');
                    tap_btn[j].classList.add('btn-active');
                    tap_body[j].style.display = 'block';
                }
                else {
                    tap_btn[j].classList.remove('btn-active');
                    tap_btn[j].classList.add('btn-non-active');
                    tap_body[j].style.display = 'none';
                }
            }
        })
    }

    // 체크박스 누르면 텍스트 표시하는 기능

    let chkbtn = document.querySelector('.login-check');
    let chk_content = document.querySelector('.hidden-text');

    chkbtn.addEventListener('change', function() {
        if(this.checked) {
            chk_content.style.display = 'block';
        }
        else {
            chk_content.style.display = 'none';
        }
    })

    // 텍스트박스 값이 변경되면 클리어 버튼이 생기는 기능, 클리어 버튼 누르면 텍스트박스 값을 없애는 기능
    let input = document.querySelectorAll(".login-input > input");
    let clearbtn = document.querySelectorAll(".login-input > button");
    

    for(let i = 0; i < input.length; i++) {
        input[i].addEventListener("input", () => {
            if(input[i].value === "") {
                clearbtn[i].style.display = "none";
            }
            else {
                clearbtn[i].style.display = "inline-flex";
            }
        })

        clearbtn[i].addEventListener("click", () => {
            input[i].value = "";
            clearbtn[i].style.display = "none";
        })
    }

    // 로그인 기능

    let idList = ["SG-PJS","SG-LES","SG-KTW"]; // 아이디 리스트
    let pwList = ["sg2023a","sg2023b","sg2023c"]; // 비밀번호 리스트
    let oneLogin = ["01234567","12345678","23456789"]; // 일회용 번호 리스트
    let loginbtn = document.querySelectorAll(".login-button");
    let login_fail = document.querySelector(".fail");
    let oneLogin_fail = document.querySelector("#onepoint-fail");
    let oneLogin_fail_text = document.querySelector("#onepoint-fail > span");
    let pw_area = document.querySelector("#pw-input");
    

    // 아이디 로그인

    loginbtn[0].addEventListener("click", () => {
        let id = document.querySelector("#id").value;
        let pw = document.querySelector("#password").value;

        for(let i = 0; i < idList.length; i++) {
            if(idList[i] === id && pwList[i] === pw) {
                location.href = "./main_login.html";
                return;
            }
        }
        // 로그인 실패 시 경고문 표시
        pw_area.style.border = "2px solid #d53430";
        login_fail.style.display = "block";
    })

    // 일회용 번호 로그인

    loginbtn[1].addEventListener("click", () => {
        let oneVal = document.querySelector("#id-num").value;

        if(oneVal.length < 8) {
            oneLogin_fail_text.innerHTML = "일회용 로그인 번호를 입력하세요."
            oneLogin_fail.style.display = "block";
        }
        else {
            oneLogin_fail_text.innerHTML = "일회용 로그인 번호 8자리를 다시 입력해주세요."
        }

        for(let i = 0; i < oneLogin.length; i++) {
            if (oneLogin[i] === oneVal) {
                location.href = "./main_login.html";
                return;
           }
        }
        
        oneLogin_fail.style.display = "block";
    })


    // input 태그에 포커스하면 알림창 사라지게 하는 기능

    for(let j = 0; j < input.length; j++) {
        input[j].addEventListener("focus", () => {
            pw_area.style.border = "";
            login_fail.style.display = "none";
            oneLogin_fail.style.display = "none";
        })
    }

    // 버튼 누르면 드롭다운 메뉴 나오게 하는 기능

    let chgicon = document.querySelector(".lang-button-non-active");
    let dropbtn = document.querySelector(".dropdown-button");
    let dropmenu = document.querySelector(".lang-sel-menu");

    dropbtn.addEventListener("click", () => {
        chgicon.classList.toggle("active");
        dropmenu.classList.toggle("opened");
    })


}