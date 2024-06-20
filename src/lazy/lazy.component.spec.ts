import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LazyComponent } from '../app/lazy/lazy.component';

describe('LazyComponent', () => {
  let component: LazyComponent;
  let fixture: ComponentFixture<LazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function beforeEach(arg0: () => Promise<void>) {
    throw new Error('Function not implemented.');
}
