import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingComponent } from './drawing.component';
import {DebugElement} from "@angular/core";
import {BrowserModule, By} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {CitiesService} from "../../../services/cities.service";

describe('DrawingComponent', () => {
  let component: DrawingComponent;
  let fixture: ComponentFixture<DrawingComponent>;
  let debugEl: DebugElement;
  let formEl: HTMLElement;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          DrawingComponent
        ],
        imports: [
          BrowserModule,
          FormsModule,
          ReactiveFormsModule,
          HttpClientTestingModule
        ],
        providers: [CitiesService]
      }).compileComponents()
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(DrawingComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      debugEl = fixture.debugElement.query(By.css('form'));
      formEl = debugEl.nativeElement;
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    })

    it('it should have text "drawing page" ', async (() => {
      expect(component.componentName).toEqual('drawing page');
    }))

    it('it should be submitted to true ', async (() => {
      component.submit();
      expect(component.isSubmitted).toBeTruthy();
    }))
});
