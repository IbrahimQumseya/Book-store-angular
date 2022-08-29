import { Injectable } from '@angular/core';
import { Book } from './types/book';

@Injectable()
export class BooksService {
  books: Book[] = [
    {
      name: 'Clean Code',
      author: 'Robert C. Martin',
      srcImage:
        'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      price: 12,
    },
    {
      name: 'Pragmatic Programmer',
      price: 13,
      author: 'David Thomas',
      srcImage:
        'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20_hu7d9a813cf46675dfb7b1bf4930cee733_2802494_375x0_resize_q75_box.jpg',
    },
  ];

  getBooks() {
    return this.books;
  }
  constructor() {}
}
