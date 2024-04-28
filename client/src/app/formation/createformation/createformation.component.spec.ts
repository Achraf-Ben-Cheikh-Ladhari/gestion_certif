import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateformationComponent } from './createformation.component';

describe('CreateformationComponent', () => {
  let component: CreateformationComponent;
  let fixture: ComponentFixture<CreateformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
