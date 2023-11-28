function checkPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const content = document.getElementById('content');

    if (passwordInput.value === '1234') {
		setTimeout(function  ()  {
             window.location.href  =  "zhuye.html";
         },  1000);
    } else {
        alert('密码错误，请重试。');
    }
}
