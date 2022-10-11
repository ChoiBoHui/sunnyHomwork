function check() {
    var frm = document.frm;
    var reg_call = /^(01[016789]{1})[0-9]{4}[0-9]{4}$/;


    // 연락처 검수
    if (!frm.call.value) {
        alert("연락처를 입력하세요!");
        frm.call.focus();
        return false;
    }
    if (!reg_call.test(frm.call.value)) {
        alert("연락처 형식을 맞춰주세요.");
        frm.call.focus();
        return false;
    }

    // 제목
    if (!frm.QNA_title.value) {
        alert("제목을 입력해 주세요!");
        frm.QNA_title.focus();
        return false;
    }

    // 분야
    if (!frm.QNA_field.value) {
        alert("분야를 선택해 주세요!");
        frm.QNA_field.focus();
        return false;
    }

    // 내용
    if (!frm.QNA_question.value) {
        alert("내용을 입력해 주세요!");
        frm.QNA_question.focus();
        return false;
    }
}
