import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HorrormoviePage } from './horrormovie.page';

describe('HorrormoviePage', () => {
  let component: HorrormoviePage;
  let fixture: ComponentFixture<HorrormoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorrormoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HorrormoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
