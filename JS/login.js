let orderNum = 0;
localStorage.getItem('orderNum') ? orderNum = localStorage.orderNum : null;
// Имитация регистрации через localstorage
let id;
localStorage.getItem(id) ? id = localStorage.getItem(id) : id = 1;
function getCoop(event) {
    event.preventDefault();
    localStorage.setItem('id', id);
    if (!document.getElementById('coopName').value) {
        alert('Пожалуйста, введите Имя пользователя')
    } else if (!document.getElementById('coopMail').value) {
        alert('Пожалуйста, введите почту')
    } else if (!document.getElementById('coopPwd').value) {
        alert('Пожалуйста, введите пароль')
    } else {
        localStorage.setItem('name', document.getElementById('coopName').value)
        localStorage.setItem('password', document.getElementById('coopPwd').value)
        localStorage.setItem('mail', document.getElementById('coopMail'.value))
        localStorage.setItem('session', 'true')
        window.location.replace('../pages/profile.html');
    }
}

function getOut() {
    delete localStorage.session;
}
