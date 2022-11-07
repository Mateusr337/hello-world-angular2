import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstComponentCliComponent } from './my-first-component-cli.component';

describe('MyFirstComponentCliComponent', () => {
  let component: MyFirstComponentCliComponent;
  let fixture: ComponentFixture<MyFirstComponentCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstComponentCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFirstComponentCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
