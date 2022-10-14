$(function () {
    // 구현해야하는것! 
    // [1] 리스트 갯수를 10개 20개 30개 선택함에 따라서 보여지는게 다르게 해야함
    // [2] 공개여부 값에 따라서 보여지는게 다르게 해야함!
    // -> open 이라는 값을 줌. 공개는 yes 비공개는 no


    let container = $('#pagination');
    // pageDate = $("#btn_view");
    // pageDataValue = $("#btn_view").val();


    container.pagination({
        // 데이터 영역!!!!===================================시작
        dataSource: [
            { num: "5060", title: '<a href="#!">' + "과정이 담아두기가 안돼요." + '</a>', state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "yes" },
            { num: "5059", title: '<img src="./img/icoLock.png" class="rock">' + "국민내일배움카드 훈련 결제방법 알려주세요", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5058", title: '<img src="./img/icoLock.png" class="rock">' + "퇴실처리미등록", state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "no" },
            { num: "5057", title: '<img src="./img/icoLock.png" class="rock">' + "온라인훈련 링크 다시 보내주실수 있을까요", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5056", title: '<a href="#!">' + "개명 수정 절차 문의" + '</a>', state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "yes", open: "no" },
            { num: "5055", title: '<img src="./img/icoLock.png" class="rock">' + "수료증 발급", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5054", title: '<a href="#!">' + "훈련종료 후 결과미등록" + '</a>', state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "yes" },
            { num: "5053", title: '<img src="./img/icoLock.png" class="rock">' + "국민내일배움카드 훈련 결제방법 알려주세요", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5052", title: '<img src="./img/icoLock.png" class="rock">' + "과정이 담아두기가 안돼요.", state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "no" },
            { num: "5051", title: '<img src="./img/icoLock.png" class="rock">' + "추가서류 관련문의", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5050", title: '<a href="#!">' + "온라인 수료증 출력 및 영문 여부" + '</a>', state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "yes" },
            { num: "5049", title: '<img src="./img/icoLock.png" class="rock">' + "문의드려요.", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5048", title: '<a href="#!">' + "HRD 넷 사용상 개명으로 인한 사용자 이름 변경" + '</a>', state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "yes" },
            { num: "5047", title: '<img src="./img/icoLock.png" class="rock">' + "카드를 못 받았어요", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5046", title: '<a href="#!">' + "과정이 담아두기가 안돼요." + '</a>', state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "yes" },
            { num: "5045", title: '<img src="./img/icoLock.png" class="rock">' + "국민내일배움카드 훈련 결제방법 알려주세요", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5044", title: '<a href="#!">' + "HRD-Net 온라인수강신청 관리 문의" + '</a>', state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "yes" },
            { num: "5043", title: '<img src="./img/icoLock.png" class="rock">' + "왜 질문에 답변이 안달리는 것인가요?", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5042", title: '<a href="#!">' + "과정이 담아두기가 안돼요." + '</a>', state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "yes" },
            { num: "5041", title: '<img src="./img/icoLock.png" class="rock">' + "나의카드 환급금미수령", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5040", title: '<a href="#!">' + "수강확인증 영문 발급" + '</a>', state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "yes" },
            { num: "5039", title: '<img src="./img/icoLock.png" class="rock">' + "국민내일배움카드 훈련 결제방법 알려주세요", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5038", title: '<img src="./img/icoLock.png" class="rock">' + "과정이 담아두기가 안돼요.", state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "no" },
            { num: "5037", title: '<img src="./img/icoLock.png" class="rock">' + "자녀장려금 수급자 수급사실증명 문의드려요", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5036", title: '<a href="#!">' + "훈련기관정보 변경방법?" + '</a>', state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "yes" },
            { num: "5035", title: '<img src="./img/icoLock.png" class="rock">' + "공인인증서 변경 재 문의", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5034", title: '<img src="./img/icoLock.png" class="rock">' + "출결관리 앱 : 개인회원-기업회원차이", state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "no" },
            { num: "5033", title: '<img src="./img/icoLock.png" class="rock">' + "국민내일배움카드 훈련 결제방법 알려주세요", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5032", title: '<a href="#!">' + "과정이 담아두기가 안돼요." + '</a>', state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "yes" },
            { num: "5031", title: '<img src="./img/icoLock.png" class="rock">' + "고용형태 오류", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5030", title: '<img src="./img/icoLock.png" class="rock">' + "훈련기관 대리인 공인인증서 변경", state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "no" },
            { num: "5029", title: '<img src="./img/icoLock.png" class="rock">' + "개명으로 인한 이름변경신청", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5028", title: '<a href="#!">' + "카드발급신청" + '</a>', state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "yes" },
            { num: "5027", title: '<img src="./img/icoLock.png" class="rock">' + "국민내일배움카드 훈련 결제방법 알려주세요", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5026", title: '<img src="./img/icoLock.png" class="rock">' + "과정이 담아두기가 안돼요.", state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "no" },
            { num: "5025", title: '<img src="./img/icoLock.png" class="rock">' + "훈련과정정보 확인 문의", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5024", title: '<a href="#!">' + "졸업증명서" + '</a>', state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "yes" },
            { num: "5023", title: '<img src="./img/icoLock.png" class="rock">' + "내일배움카드 출석오류", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5022", title: '<a href="#!">' + "pc 로그인 비번 편의성?" + '</a>', state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "yes" },
            { num: "5021", title: '<img src="./img/icoLock.png" class="rock">' + "QR출석체크", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
            { num: "5020", title: '<img src="./img/icoLock.png" class="rock">' + "과정이 담아두기가 안돼요.", state: "접수", writer: "구*준", date: "2022-10-11", hits: "0", open: "no" },
            { num: "5019", title: '<img src="./img/icoLock.png" class="rock">' + "국민내일배움카드 훈련 결제방법 알려주세요", state: "완료", writer: "오*영", date: "2022-10-10", hits: "2", open: "no" },
        ],
        // 데이터 영역!!!!===================================끝
        pageSize: 10,
        // 버튼을 on click 했을때! pageSize 값이 해당 숫자로 바뀌게 해야함!



        callback: function (data, pagination) {
            var dataHtml = '<colgroup>'
                + '<col style="width: 10%;">'
                + '<col style="width: auto;">'
                + '<col style="width: 10%;">'
                + '<col style="width: 10%;">'
                + '<col style="width: 15%;">'
                + '<col style="width: 10%;">'
                + '</colgroup>'
                + '<thead>'
                + '<tr>'
                + '<th scope="col">' + "번호" + '</th>'
                + '<th scope="col">' + "제목" + '</th>'
                + '<th scope="col">' + "처리상태" + '</th>'
                + '<th scope="col">' + "작성자" + '</th>'
                + '<th scope="col">' + "등록일" + '</th>'
                + '<th scope="col">' + "조회수" + '</th>'
                + '</tr>'
                + '</thead>'
                + '<tbody>';

            $.each(data, function (index, item) {
                dataHtml += '<tr>'
                    // 이 밑으로 테이블에 들어가는 요소들 하나씩 td 안에 넣어주면 됨
                    + '<td>'
                    + item.num
                    + '</td>'
                    + '<td>'
                    + item.title
                    + '</td>'
                    + '<td>'
                    + item.state
                    + '</td>'
                    + '<td>'
                    + item.writer
                    + '</td>'
                    + '<td>'
                    + item.date
                    + '</td>'
                    + '<td>'
                    + item.hits
                    + '</td>'
                    // 이 위에까지만 td로 넣으시오
                    + '</tr>';
            });

            dataHtml += '</tbody>';

            $("#data-container").html(dataHtml);
        }
    })
});