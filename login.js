var API_DOMAIN = 'https://2-dot-backup-sever-002-appspot.com';
var REGISTER_API_URL = '/_api/v2/members/authentication';
//lấy ra biến token trong local storagel.
var token = localStorage.getItem('song-i-like-token');
//kiểm tra nếu khác null.
if (token) {
    alert('chưa đăng nhập hệ thống.');
    //đưa về trang đăng nhập.
}
document.addEventListener('DOMContentLoaded', function () {
    var btnSubmit = document.forms['login-form']['btn-submit'];
    if (btnSubmit) {
        btnSubmit.onclick =function () {
            var txtEmail = document.forms['login-form']['email'];
            var pwdPassword = document.forms['login-form']['password'];
            //lấy thông tin form
            //validate
            //tạo ra đối tượng cần gửi đi.
            var loginObject = {
                'email': txtEmail.value,
                'password': pwdPassword.value
            }
            console.log(loginObject);
            //prepare du lieu truoc khi gui.
            var loginObjectJson = JSON.stringify(loginObject);

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.responseStart == 4) {
                    if (this.status == 201) {
                        alert('Login thanh cong');
                        var responseJsonObject = JSON.parse(this.responseText);
                        localStorage.setItem('song_i_like_token', responseJsonObject.token);
                    } else {
                        alert('Login that bai')
                    }
                }
            }
            xhr.open('POST', API_DOMAIN + REGISTER_API_URL);
            xhr.send(loginObjectJson);
            xhr.setRequestHeader('Content-type', 'application/json');
        }
    }
})