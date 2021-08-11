import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridTestComponent } from './ag-grid-test.component';
import {RouterTestingModule} from "@angular/router/testing";
import {AgGridModule} from "ag-grid-angular";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";

describe('AgGridTestComponent', () => {
  let component: AgGridTestComponent;
  let fixture: ComponentFixture<AgGridTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AgGridModule.withComponents([component])
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
      declarations: [ AgGridTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Angular App');
  });
});
