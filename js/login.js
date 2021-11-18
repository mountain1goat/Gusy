

const login = function () {
    const modalAuth = document.querySelector(".modal-auth");
    const btnClose = document.querySelector(".close-auth");

    const btnCart = document.querySelector('.button-cart')
    const btnin = document.querySelector('.button-auth');
    const btnout = document.querySelector('.button-out');
    let name = document.querySelector('.user-name');

    const userName = document.getElementById('login');
    const userPass = document.getElementById('password');

    const btnEntry = document.querySelector('.button-login');


    btnin.addEventListener('click', showInfo)
    function showInfo() {
        modalAuth.classList.add('is-open');
    };

    btnout.addEventListener('click', ()=>{
        name.textContent = '';
        localStorage.removeItem('user');
        btnout.classList.remove('is-open');
        btnin.style.display = '';
        btnin.classList.add('is-open');
        btnCart.classList.remove('is-open');
    })

    btnClose.addEventListener('click', closeModal);  //на крестик закрытие

    function closeModal() {
        modalAuth.classList.remove('is-open');
        ex.textContent = '';
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

    let ex = document.createElement('a');

    btnEntry.addEventListener('click', (e) => {
        e.preventDefault();
        
        
        if (userName.value.trim().length > 0 || userPass.value.trim().length > 0) {
                const user = {
                    login: userName.value,
                    pass: userPass.value
                };
                localStorage.setItem('user', JSON.stringify(user));
                
                userName.value = '';   userPass.value = '';
                btnin.style.display = 'none';
                btnout.classList.add('is-open');
                btnCart.classList.add('is-open');

                name.classList.add('is-open');
                name.textContent = JSON.parse(localStorage.getItem('user')).login;
                
                closeModal();
            } else {
                ex.style = 'color: red;';
                ex.textContent = 'Введите логин или пароль'
             }
             let mTitle = document.querySelector('.label-auth');
             mTitle.before(ex);
    });
    if(localStorage.getItem('user')){
        name.classList.add('is-open');
        name.textContent = JSON.parse(localStorage.getItem('user')).login;
        btnout.classList.add('is-open');
        btnin.style.display = 'none';
        btnCart.classList.add('is-open');
    }
                
}

export { login }

