import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecketHeaderComponent } from './tecket-header.component';

describe('TecketHeaderComponent', () => {
  let component: TecketHeaderComponent;
  let fixture: ComponentFixture<TecketHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TecketHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TecketHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
