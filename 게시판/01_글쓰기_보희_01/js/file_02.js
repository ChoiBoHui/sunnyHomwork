window.addEventListener('DOMContentLoaded', function () {
    // 해결해야하는 과제..
    // [1] 3개의 버튼을 선택해도 한개의 썸네일만 올라감..
    // [2] 파일 삭제 해야함
    // [3] 뭐 클릭하면 화면이 자꾸 올라감..

    // function handleFileSelect(event) {
    //     var input = this;
    //     console.log(input.files)
    //     if (input.files && input.files.length) {
    //         var reader = new FileReader();
    //         this.enabled = false
    //         reader.onload = (function (e) {
    //             console.log(e)
    //             $("#preview").html(['<img class="thumb" src="', e.target.result, '" title=", escape(e.name), "/>'].join(''))
    //         });
    //         reader.readAsDataURL(input.files[0]);
    //     }
    // }
    // $('#file').change(handleFileSelect);
    // $('.file-edit-icon').on('click', '.preview-de', function () {
    //     $("#preview").empty()
    //     $("#file").val("");
    // });
    // $('.preview-edit').click(function () {
    //     $("#file").click();
    // });



    const imageTag = document.getElementById("ex_file");
    imageTag.addEventListener('change', function () {
        console.log('파일선택');
        while (onnode.hasChildNodes()) {
            onnode.removeChild(onnode.firstChild);
        }
        loadImg(this);

    });

    function loadImg(value) {

        for (let i = 0; i < value.files.length; i++) {
            console.log("in")
            if (value.files && value.files[i]) {

                let reader = new FileReader();

                let fullname = document.getElementById("ex_file").files[i].name;
                let str = fullname.split('.');
                let ext = str[1];
                console.log("확장자: " + ext);

                let node = document.createElement('li');
                let tmp = `
                <li><img scr="" class="uploadimage">
                        \${fullname}
                    <input type="button" class="rmbtn" value="삭제">
                </li>
            `
                node.innerHTML = tmp;

                node.querySelector('.rmbtn').onclick = function () {
                    node.remove();
                    const dataTransfer = new DataTransfer();
                    let trans = $('#ex_file')[0].files;
                    let filearray = Array.from(trans);
                    filearray.splice(i, 1);
                    filearray.forEach(file => {
                        dataTransfer.items.add(file);
                    });
                    $('#ex_file')[0].files = dataTransfer.files

                }


                if (ext == "txt") {
                    onnode.appendChild(node)
                    node.querySelector("img").setAttribute('src', "/assets/img/textfile.jpg");
                } else {
                    reader.onload = function (e) {
                        onnode.appendChild(node)
                        node.querySelector("img").setAttribute('src', e.target.result);
                    }
                }

                reader.readAsDataURL(value.files[i]);
            }

        }

    }

});

