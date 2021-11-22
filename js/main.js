import { createManyCard } from './menu.js';
import {login} from './login.js';
import {cart} from './cart.js';
import {getCards} from './api.js';


login();
cart();
getCards()
.then(data=>createManyCard(data.cards))
