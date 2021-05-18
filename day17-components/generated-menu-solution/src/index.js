import './index.html';

import './css/style.scss';

import Navigation from './js/Navigation.js';


const nav = document.querySelector('.navigation');

const items = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'About us',
        url: '/about-us'
    },
    {
        name: 'Products',
        url: '/products',
        items: [
            {
                name: 'Mobile phones',
                url: '/products/mobile-phones'
            },
            {
                name: 'Laptops and Tablets',
                url: '/products/laptops-tablets'
            },
            {
                name: 'Accessories',
                url: '/products/accessories'
            },
            ,
            {
                name: 'Gaming',
                url: '/products/gaming',
            }
        ]
    },
    {
        name: 'Contact',
        url: '/contact',
        items: [
            {
                name: 'Company HQ',
                url: '/contact/hq'
            },
            {
                name: 'Stores',
                url: '/contact/stores'
            }
        ]
    },
    {
        name: 'Sign in',
        url: '/signin'
    }
];


new Navigation(nav, items);