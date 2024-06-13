import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-books-prices',
  templateUrl: './books-prices.component.html',
  styleUrls: ['./books-prices.component.scss']
})
export class BooksPricesComponent implements AfterViewInit {
  books = [
    { title: 'Book 1', price: 10, quantity: 1 },
    { title: 'Book 2', price: 20, quantity: 1 },
    { title: 'Book 3', price: 30, quantity: 1 }
  ];

  getTotalPrice(): number {
    return this.books.reduce((acc, book) => acc + book.price * book.quantity, 0);
  }

  ngAfterViewInit() {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new (window as any).bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
}
