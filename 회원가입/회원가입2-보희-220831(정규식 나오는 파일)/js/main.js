$(function () {

  // .ps_box 클릭 시, focus 클래스를 붙여 초록색 볼더를 생성
  $('.ps_box').click(function () {
    $(this).children('input').focus();
    $(this).addClass('focus');
  }).focusout(function () {
    // var welInputText = $('.ps_box'); 네이버에서 아래 한줄 쓰려고 변수를 썼을까..?
    $('.ps_box').removeClass('focus');
  });

});
// 이 위로 제이쿼리

// 으아아ㅏ 해도해도모르겠다ㅏ!!!!!!!
var error = document.querySelectorAll('.error_next_box');
var id = document.querySelector('#id');
//region unreal id
$("#id").blur(function () {
  idFlag = false;
  checkId("first");
});

id.addEventListener("change", checkId);
function checkId(event) {
  // 아래는 id 유효성 검사 정규식임, 안에 공백이 들어가면 안되게도 수정 완료.
  // class green 붙였다 지우는건 다른 방법이 있을것같은데.. 모르겠어서 일단 이렇게 해봤습니다...ㅎ
  // return false 가 쓰이는 이유가 입력한 값을 데이터로 넘기지 않기 위해서 쓴다는거까지만 알아보았습니다!
  // !! 알게된거 하나!!! error[숫자] 의 숫자는 몇번째에 위치한 error인가!! 이다!! 만약 여기 1을 쓰면 html 위치로 두번째에 있는 error input 태그가 선택되는 것이다!!!
  var idPattern = /^[a-z0-9][a-z0-9_\-]{4,19}$/;
  if (id.value == "") {
    error[0].innerHTML = "필수 정보입니다.";
    error[0].style.display = "block";
    error[0].classList.remove('green', true)
    return false;
  } else if (!idPattern.test(id.value)) {
    error[0].innerHTML = "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
    error[0].style.display = "block";
    error[0].classList.remove('green', true)
    return false;
  } else {
    error[0].innerHTML = "멋진 아이디네요!";
    error[0].style.display = "block";
    error[0].classList.add('green', true)
    return true;
  }
};