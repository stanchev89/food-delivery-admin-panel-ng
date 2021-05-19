import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishItemListComponent } from './dish-item-list.component';

describe('DishItemListComponent', () => {
  let component: DishItemListComponent;
  let fixture: ComponentFixture<DishItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
