$(document).ready(function () {
    // 이부분 복붙이라 제이쿼리 썼습니다.. 이후에 수정 하겠습니다.. 8^8
    var fileTarget = $('.filebox .upload-hidden');

    fileTarget.on('change', function () {
        if (window.FileReader) {
            // 파일명 추출
            var filename = $(this)[0].files[0].name;
        }

        else {
            // Old IE 파일명 추출
            var filename = $(this).val().split('/').pop().split('\\').pop();
        };

        $(this).siblings('.upload-name').val(filename);
    });

    //preview image 
    var imgTarget = $('.preview-image .upload-hidden');

    imgTarget.on('change', function () {
        var parent = $(this).parent();
        parent.children('.upload-display').remove();

        if (window.FileReader) {
            //image 파일만
            if (!$(this)[0].files[0].type.match(/image\//)) return;

            var reader = new FileReader();
            reader.onload = function (e) {
                var src = e.target.result;
                parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img src="' + src + '" class="upload-thumb"></div></div>');
            }
            reader.readAsDataURL($(this)[0].files[0]);
        }

        else {
            $(this)[0].select();
            $(this)[0].blur();
            var imgSrc = document.selection.createRange().text;
            parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img class="upload-thumb"></div></div>');

            var img = $(this).siblings('.upload-display').find('img');
            img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\"" + imgSrc + "\")";
        }
    });
});

// 지금 보면 3개의 버튼을 선택해도 한개의 썸네일만 올라감..
// 해보려고 했는데.. 스크립트 해석이 안돼서 일단 패스...

// 전화번호 정규식 추가 해야함
// 제목이랑 분야 내용 작성 안하면 안넘어가게 해야함