import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YearmoviePage } from './yearmovie.page';

describe('YearmoviePage', () => {
  let component: YearmoviePage;
  let fixture: ComponentFixture<YearmoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearmoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YearmoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
