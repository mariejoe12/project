import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-books-prices',
  templateUrl: './books-prices.component.html',
  styleUrls: ['./books-prices.component.scss']
})
export class BooksPricesComponent implements AfterViewInit {
  clientName: string ;
  shopCompleted: boolean = false;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.clientName = navigation?.extras.state?.['name'] || 'Guest';
  }
  books = [
    { title: ' Take me with you', price: 17, quantity: 0 },
    { title: ' Being the best version of me', price: 16, quantity: 0 },
    { title: ' forgive yourself', price: 25, quantity: 0 },
    { title: ' The lord of the rings', price: 10, quantity: 0 },
    { title: ' The little prince ', price: 15, quantity: 0 }
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
  completeShop() {
    this.shopCompleted = true;
  }
}