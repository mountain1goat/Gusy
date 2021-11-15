import {cards} from './gusi-lebedi.js';

const menu = function () {
    const cardsMenu = document.querySelector('.cards-menu')
    function createManyCard(data) {
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = createCard(item);
            cardsMenu.append(card);
        });
    }

    function createCard(item) {
        let {image, name, description, price} = item;
        return `
        <img src="${image}" alt="image" class="card-image" />
		<div class="card-text">
		<div class="card-heading">
			<h3 class="card-title card-title-reg">${name}</h3>
		</div>
		<!-- /.card-heading -->
		<div class="card-info">
			<div class="ingredients">
            ${description}
			</div>
			</div>
		<!-- /.card-info -->
		<div class="card-buttons">
			<button class="button button-primary button-add-cart">
				<span class="button-card-text">В корзину</span>
				<span class="button-cart-svg"></span>
			</button>
			<strong class="card-price-bold">${price} ₽</strong>
		</div>
	</div>
    `;
    }

    createManyCard(cards);
}
export { menu }