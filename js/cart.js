const cart = function (){
    const modalCart = document.querySelector('.modal-cart');
    const btnCloseCart = document.querySelector(".close");

    const btnCart = document.querySelector('.button-cart');
    const btnClearCart = document.querySelector('.clear-cart');
    
    const btnPrimary = document.querySelector('.button-primary');
    const priceCart = document.querySelector('.modal-pricetag');

    const cBtn = document.querySelectorAll('.counter-button');
    const count = document.querySelectorAll('.counter');

    const contCart = document.querySelector('.modal-body')
    
    btnCart.addEventListener('click', showCart);
    function showCart(){
        modalCart.classList.add('is-open');
        const cardsCart = JSON.parse(localStorage.getItem('basket'));
        createManyCard(cardsCart);
    }

    btnCloseCart.addEventListener('click', closeModal);  //на крестик закрытие
    btnClearCart.addEventListener('click', closeModal);
    function closeModal() {
        modalCart.classList.remove('is-open');
        contCart.textContent = '';
        priceCart.textContent = '';
        cardPrice = 0;
    }

    modalCart.addEventListener("click", e => {   //нажатие на фон
        if (e.target === e.currentTarget) {
            closeModal();
        }
    })

    document.addEventListener("keydown", e => {
        if (e.code === "Escape") {
            closeModal();  //на Esc
        }
    })
    
    
    function createManyCard(data) {
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('food-row');
            card.innerHTML = createCard(item);
            contCart.append(card);
            priceCart.textContent = `${cardPrice} ₽`;
        });
    }
    let cardPrice = 0;
    function createCard(item) {
        let {name, price, count} = item;
        cardPrice += price*count;
        return `
		<span class="food-name">${name}</span>
		<strong class="food-price">${price*count} ₽</strong>
		<div class="food-counter">
			<button class="counter-button">-</button>
			<span class="counter">${count}</span>
			<button class="counter-button">+</button>
		</div>
        `;
    }
    
}

export { cart }