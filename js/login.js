

const login = function() {
    const modalAuth = document.querySelector(".modal-auth");
    const btnClose = document.querySelector(".close-auth");

    const btnin = document.querySelector('.button-auth');
    const btnout = document.querySelector('.button-out');
    const name = document.getElementById('user-name');

    const userName = document.getElementById('login');
    const userPass = document.getElementById('password');

    const btnEntry = document.querySelector('.button-login');

    btnin.addEventListener('click', showInfo)
    function showInfo(){
        modalAuth.classList.add('is-open');
    };

    btnClose.addEventListener('click', closeModal);  //на крестик закрытие
    
    function closeModal() {
        modalAuth.classList.remove('is-open');
    }

    modalAuth.addEventListener("click", e => {   //нажатие на фон
        if (e.target === e.currentTarget) {
            closeModal();
        }
    })

    document.addEventListener("keydown", e => {
        if (e.code === "Escape") {
            closeModal();  //на Esc
        }
    })

    btnEntry.addEventListener('click', (e) => {
        e.preventDefault();
        if (userName.value.trim().length > 0) {
        if (userPass.value.trim().length > 0) {
            const user = {
                login: userName.value,
                pass: userPass.value
            };
            localStorage.setItem('user', JSON.stringify(user));
    
            btnin.style.display = 'none';
            btnout.classList.add('is-open');

            name.textContent = user.login;
            closeModal();
        }else {alert('Введите пароль');}
        }
        else {
            alert('Введите логин');
        }
    });



    // window.addEventListener('load', () => {
    //     login(JSON.parse(localStorage.getItem('user')));
    // });
    
    // const login = (user) => {
    //     if (btnin.style.display == '') {
    //         btnout.style.display = '';
    //         btnin.style.display == 'none';

    //         name.textContent = user.login;
    //     }
    //     else {
    //         name.textContent = '';
    //         btnin.style.display == '';
    //         btnout.style.display == 'none'
            
    //         localStorage.removeItem('user');
    //     }
    // }
    // btnin.addEventListener('click', login);
    // btnin.addEventListener('click', () => {
    //     modalAuth.style.display = '';
    // });

    // btnEntry.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     if (userName.value.trim().length > 0) {
    //     if (userPass.value.trim().length > 0) {
    //         const user = {
    //             login: userName.value,
    //             pass: userPass.value
    //         };
    //         localStorage.setItem('user', JSON.stringify(user));
    
    //         if(btnin.style.display == 'none'){
    //             btnin.style.display = '';
    //             btnout.style.display = 'none';
    //         } else{
    //             btnout.style.display = '';
    //             btnin.style.display = 'none';
    //         } 

    //         name.textContent = user.login;
    //         modalAuth.style.display = 'none';
    //     }else {alert('Введите пароль');}
    //     }
    //     else {
    //         alert('Введите логин');
    //     }
    // });

}

export { login }
