import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComedymoviePage } from './comedymovie.page';

describe('ComedymoviePage', () => {
  let component: ComedymoviePage;
  let fixture: ComponentFixture<ComedymoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComedymoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComedymoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
