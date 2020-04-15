import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrimemoviePage } from './crimemovie.page';

describe('CrimemoviePage', () => {
  let component: CrimemoviePage;
  let fixture: ComponentFixture<CrimemoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimemoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrimemoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
