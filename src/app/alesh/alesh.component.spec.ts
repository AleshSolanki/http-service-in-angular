import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AleshComponent } from './alesh.component';

describe('AleshComponent', () => {
  let component: AleshComponent;
  let fixture: ComponentFixture<AleshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AleshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AleshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
