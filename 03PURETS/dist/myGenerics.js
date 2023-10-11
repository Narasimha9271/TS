"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({})
function getSearchProducts(products) {
    //do some database operations
    const myIdx = 3;
    return products[myIdx];
}
//Arrow functions
// const getMoreSearchProducts = () => {} in JS
// const getMoreSearchProducts = (): => {} in TS
// const getMoreSearchProducts = <T>(): => {} in TS in Generics
const getMoreSearchProducts = (products) => {
    //do some database operations
    const myIdx = 8;
    return products[myIdx];
};
const getMoreMoreSearchProducts = (products) => {
    //do some database operations
    const myIdx = 2;
    return products[myIdx];
};
function anotherFun(val1, val2) {
    return {
        val1,
        val2
    };
}
anotherFun(33, "8");
function anotherFunn(val1, val2) {
    return {
        val1,
        val2
    };
}
function anotherFunnn(val1, val2) {
    return {
        val1,
        val2
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
