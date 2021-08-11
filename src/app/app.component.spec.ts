import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AgGridModule } from "ag-grid-angular";
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

   beforeEach(async(() => {
     TestBed.configureTestingModule({
       imports: [
         RouterTestingModule,
         AgGridModule.withComponents([component])
       ],
       // schemas: [
       //   CUSTOM_ELEMENTS_SCHEMA,
       //   NO_ERRORS_SCHEMA
       // ],
       declarations: [AppComponent]
     })
       .compileComponents();
   }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    // it('should render title in a h1 tag', () => {
    //   fixture.detectChanges();
    //   const compiled = fixture.debugElement.nativeElement;
    //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to Angular App');
    // });
});
