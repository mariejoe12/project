import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPricesComponent } from './books-prices.component';

describe('BooksPricesComponent', () => {
  let component: BooksPricesComponent;
  let fixture: ComponentFixture<BooksPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksPricesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
