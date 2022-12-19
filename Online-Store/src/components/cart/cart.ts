/* eslint-disable prettier/prettier */
import './cart.css';
import Card from '../cards/card';
import CONSTANTS from '../../constants/constants';
const card = new Card();
card.cardDrawing()

class Cart{
    countCart: number;
    cardList: NodeListOf<Element>;
    cartList: NodeListOf<Element>;
    cardContainer: Element;
    cart: HTMLBodyElement;
    storage: Storage;
    localStorageArr: string[];
    localStorageValue: string;
    constructor(){
        this.storage = localStorage;
        this.countCart=0
        this.cardContainer = document.querySelector('.container') as Element;
        this.cardList = document.querySelectorAll('.card');
        this.cartList = document.querySelectorAll('.cardCart');
        this.cart = document.querySelector('.cart') as HTMLBodyElement;
        this.localStorageArr = [];
        this.localStorageValue = '';
    }
    add(){
        this.cardContainer.addEventListener('click',(e: Event)=>{
            const targetElement = e.target as Element;
            const cardElement = targetElement.classList.contains("card") ? targetElement: targetElement.parentElement;
            const childNodes = cardElement?.childNodes as NodeListOf<Element>;
            const elemName = cardElement instanceof Element ? childNodes[1].textContent as string : "";
            const cartImageElement = childNodes[childNodes.length - 2] as Element;
            cartImageElement.classList.toggle('activeCart');
            if (!cartImageElement.classList.contains('activeCart')){
                const index = this.localStorageArr.indexOf(elemName);
                this.localStorageArr.splice(index, 1);
                this.countCart--;
                this.cart.innerHTML=`<img src="/src/img/cart.png" alt="cart">${this.countCart}`
            }else{
                this.localStorageArr.push(elemName)
                this.countCart++;
                this.cart.innerHTML=`<img src="/src/img/cart.png" alt="cart">${this.countCart}`
            }
            if(this.countCart>CONSTANTS.MAX_VALUE_CART){
                const index = this.localStorageArr.indexOf(elemName);
                this.localStorageArr.splice(index, 1);
                this.countCart--;
                alert('Извините, все слоты заполнены')
                this.cart.innerHTML=`<img src="/src/img/cart.png" alt="cart">${this.countCart}`
                cartImageElement.classList.toggle('activeCart');
            }
            this.localStorageArr.push(`${this.countCart}`)
            this.localStorageValue = JSON.stringify(this.localStorageArr)
            this.storage.setItem('cart', this.localStorageValue)
        });
    }
}
export default Cart;
