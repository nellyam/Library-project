import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtoileComponent } from './etoile.component';

describe('EtoileComponent', () => {
  let component: EtoileComponent;
  let fixture: ComponentFixture<EtoileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtoileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtoileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
