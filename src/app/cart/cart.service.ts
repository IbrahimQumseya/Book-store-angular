import { Injectable } from '@angular/core';
import { Book } from '../books/types/book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Book[] = [];
  constructor() {}

  addToCart(book: Book) {
    this.cart.push(book);
  }

  getCarts() {
    return this.cart;
  }
  removeFromCart(book: Book) {
    this.cart = this.cart.filter((b) => b != book);
  }
}
