import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavIzquierdaComponent } from './nav-izquierda.component';

describe('NavIzquierdaComponent', () => {
  let component: NavIzquierdaComponent;
  let fixture: ComponentFixture<NavIzquierdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavIzquierdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavIzquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
