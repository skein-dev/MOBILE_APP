import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RateNowPage } from './rate-now.page';

describe('RateNowPage', () => {
  let component: RateNowPage;
  let fixture: ComponentFixture<RateNowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateNowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RateNowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
