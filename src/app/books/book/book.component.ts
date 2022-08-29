import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { Book } from '../types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  isInCart: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart() {
    this.isInCart = true;
    this.cartService.addToCart(this.book);
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.removeFromCart(this.book);
  }
}
