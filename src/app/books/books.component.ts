import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from './types/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor(private bookService: BooksService) {}
  books: Book[] = [];
  isShowing: boolean = false;

  onSave() {
    this.isShowing = !this.isShowing;
  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
}
