import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/mobile-nav.css';
import '../styles/components/hero.css';
import '../styles/components/menu.css';
import '../styles/components/menu-order.css'
import '../styles/utils.css';

import mobileNav from './utils/mobile-nav';
import fetchProductItem from './utils/fetchProductItem';

const coffees = {
    black: {
        ingredients: ['just coffee']
    },
    latte: {
        ingredients: ['espresso', 'steamed milk']
    },
    cappuccino: {
        ingredients: ['espresso', 'steamed milk', 'foam']
    },
    americano: {
        ingredients: ['hot water']
    },
    espresso: {
        ingredients: ['1oz espresso']
    },
    doppio: {
        ingredients: ['2oz espresso']
    },
    cortado: {
        ingredients: ['1oz espresso', '1oz steamed milk']
    },
    red_eye: {
        ingredients: ['coffee', 'espresso']
    },
    galao: {
        ingredients: ['espresso', 'foamed milk']
    },
    lungo: {
        ingredients: ['long pulled espresso']
    },
    macchiato: {
        ingredients: ['espresso shot', 'foam']
    },
    mocha: {
        ingredients: ['espresso', 'chocolate', 'steamed milk']
    },
    ristretto: {
        ingredients: ['short pulled espresso']
    },
    flat_white: {
        ingredients: ['espresso', 'steamed milk']
    },
    affogato: {
        ingredients: ['espresso', 'steamed milk']
    },
    cafe_au_lait: {
        ingredients: ['coffee', 'steamed milk']
    },
    irish: {
        ingredients: ['coffee', 'whiskey', 'sugar', 'cream']
    }
};
mobileNav();

console.log(fetchProductItem(coffees));