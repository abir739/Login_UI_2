const Box = document.querySelector('.Box');
const Loginbtn = document.querySelector('.login-btn');
const Registerbtn = document.querySelector('.register-btn');
const LoginbtnTop = document.querySelector('.btnLogin1');
const Close = document.querySelector('.colse-icon');



Loginbtn.addEventListener('click', () => {
    Box.classList.add('active');
});

Registerbtn.addEventListener('click', () => {
    Box.classList.remove('active');
});

LoginbtnTop.addEventListener('click', () => {
    Box.classList.add('active-popup');
});

Close.addEventListener('click', () => {
    Box.classList.remove('active-popup');
})