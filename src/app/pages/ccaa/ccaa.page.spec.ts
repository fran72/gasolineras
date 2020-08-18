import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CcaaPage } from './ccaa.page';

describe('CcaaPage', () => {
  let component: CcaaPage;
  let fixture: ComponentFixture<CcaaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcaaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CcaaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
