import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragNDropDiagramComponent } from './drag-n-drop-diagram.component';

describe('DragNDropDiagramComponent', () => {
  let component: DragNDropDiagramComponent;
  let fixture: ComponentFixture<DragNDropDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragNDropDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragNDropDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
