let delay = 300;
let timer = null;
var des = "";

window.onload = function () {
  /* [html 최초 로드 및 이벤트 상시 대기 실시] */
  console.log("[window 이벤트를 최초 실행 합니다!]");
  clearTimeout(timer);
  timer = setTimeout(function () {
    des = document.querySelector(".des");
    console.log(innerWidth);
    if (window.innerWidth > 1024) {
      des.style.color = "blue";
    } else if (window.innerWidth > 768) {
      des.style.color = "red";
    } else {
      des.style.color = "green";
    }
  });

  /* [html 화면 사이즈 변경 이벤트 감지] */
  window.addEventListener("resize", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      des = document.querySelector(".des");
      console.log("[window 사이즈가 바꼈습니다!]");
      console.log(innerWidth);
      if (window.innerWidth > 1024) {
        des.style.color = "blue";
      } else if (window.innerWidth > 768) {
        des.style.color = "red";
      } else {
        des.style.color = "green";
      }
    }, delay);
  });
};
// 요 위로 인터넷창이 리사이즈 될때마다 콘솔에 innerWidth 값 찍히게 + 특정 글자 색 바꾸기!!

function selectEmail() {
  const se = document.getElementById("email3").value;
  const se2 = document.getElementById("email2");

  if (se == "") {
    se2.removeAttribute("disabled");
    se2.value = ""; // 지운 다음에 다시 쓰게 하기 위해서 밸류값을 비워둔거임
    se2.focus();
    //return false;
  } else {
    se2.value = se;
    se2.setAttribute("disabled", true);
  }
  //oninput도 참고해봐!
  // $("#email3").on("change", function () {
  //   const this_val = $("#email2").val($("#email3").val());
  //   console.log(this_val)
  // });
}
$(function () {
  $(".datepicker").datepicker({
    dateFormat: "yy-mm-dd", //달력 날짜 형태
    showOtherMonths: true, //빈 공간에 현재월의 앞뒤월의 날짜를 표시
    showMonthAfterYear: true, // 월- 년 순서가아닌 년도 - 월 순서
    changeYear: true, //option값 년 선택 가능
    changeMonth: true, //option값  월 선택 가능
    showOn: "both", //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
    buttonImage:
      "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif", //버튼 이미지 경로
    buttonImageOnly: true, //버튼 이미지만 깔끔하게 보이게함
    buttonText: "선택", //버튼 호버 텍스트
    yearSuffix: "년", //달력의 년도 부분 뒤 텍스트
    monthNamesShort: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ], //달력의 월 부분 텍스트
    monthNames: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ], //달력의 월 부분 Tooltip
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"], //달력의 요일 텍스트
    dayNames: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ], //달력의 요일 Tooltip
    minDate: "-5Y", //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
    maxDate: "+5y", //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
  });
  //초기값을 오늘 날짜로 설정해줘야 합니다.
  $(".datepicker").datepicker("setDate", "today"); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)

  //   $("#email3").change(function () {
  //     selectEmail();
  //   }); //스크립트단에서 호출
  //https://devmoony.tistory.com/89 참고
});

function check() {
  var frm = document.frm;
  var reg_m_id = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/;
  //정규식 기호는 /정식객체/ 이다. ()는 구분하기위해써준것. ^시작의 의미, $ 끝의 의미.
  //a-zA-Z 영문자 사용, 0-9 숫자사용 ,{6,}은 6자리 이상. ?=.* 한번이상은 반복하여라!
  var reg_password =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  var reg_call = /^(01[016789]{1})[0-9]{4}[0-9]{4}$/;

  //아이디 검수
  if (!frm.m_id.value) {
    // 폼에.엠아이디 라는 아이디를 가진.밸류값, 자스는 #을 안써도 아이디값을 이렇게 쓸 수가 있다.!!
    alert("아이디를 입력해 주세요!");
    frm.m_id.focus();
    return false;
  }

  if (!reg_m_id.test(frm.id.value)) {
    // 위에 선언해둔 정규식에 있는 reg_m_id값과 비교했을때 값이 같지 않을때 아래 얼럿을 뛰우라는 것이다!
    alert("아이디는 6자 이상, 영문, 숫자를 포함해야 합니다.");
    frm.m_id.focus();
    return false;
  }

  //비밀번호 검수
  if (!frm.password.value) {
    alert("비밀번호를 입력하세요!");
    frm.password.focus();
    return false;
  }
  if (!reg_password.test(frm.password.value)) {
    alert("비밀번호는 8자이상, 영문, 숫자, 특수문자를 포함해야합니다.");
    frm.password.focus();
    return false;
  }
  // 비밀번호 재입력 검수
  if (!frm.re_password.value) {
    alert("비밀번호를 입력하세요!");
    frm.re_password.focus();
    return false;
  }
  if (frm.password.value != frm.re_password.value) {
    //같지않을때 비교연산자써주기!
    alert("비밀번호가 같지않습니다. 다시 입력해주세요.");
    frm.re_password.focus();
    return false;
  }

  //회사명과 회원명은 안쓴것에 대한 내용만 써줄것!
  if (!frm.name.value) {
    alert("회원명을 입력하세요!");
    frm.name.focus();
    return false;
  }



  // 여기서부터 이메일 값 받아오기!!!
  const email_get01 = frm.email1.value;
  const email_get02 = frm.email2.value;
  const check_email = email_get01 + "@" + email_get02;
  frm.finalEmail.value = check_email;
  const hdEmail = document.getElementById("finalEmail").value;
  console.log(hdEmail);
  // 여기까지가 이메일 값 받아오기 끝!!!



  // 핸드폰 번호 검수
  if (!frm.call.value) {
    alert("핸드폰번호를 입력하세요!");
    frm.call.focus();
    return false;
  }
  if (!reg_call.test(frm.call.value)) {
    alert("핸드폰 번호 형식을 맞춰주세요.");
    frm.call.focus();
    return false;
  }
}

// 요 아래로 변화 없음!!

/*function receiveRadio() {
  var frm = document.frm;
  var receive = document.getElementById("receive");
  var reject = document.getElementById("reject");
  receive.onclick = function () {
    for (var i = 0; i < frm.length; i++) {
      if (frm[i].type == "checkbox") {
        frm[i].checked = true;
        frm[i].disabled = false;
      }
    }
  };
  reject.onclick = function () {
    //수신거부를 됬을때는 체크박스가 비활성화 되어야한다.

    for (var i = 0; i < frm.length; i++) {
      if (frm[i].type == "checkbox") {
        frm[i].checked = false;
        frm[i].disabled = true;
      }
    }
  };
}*/
/*if (window.attachEvent) {
  //ie8이하
  window.attachEvent("onload", receiveRadio);
} else {
  //ie8 이상
  window.addEventListener("load", receiveRadio);
}*/

/*
    완료되었을때 성공! 얼럿창!
*/
