import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingConfirmedPage } from './booking-confirmed.page';

describe('BookingConfirmedPage', () => {
  let component: BookingConfirmedPage;
  let fixture: ComponentFixture<BookingConfirmedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingConfirmedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingConfirmedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
