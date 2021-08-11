import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { DrawingComponent } from "./shared/components/drawing/drawing.component";
import { routes } from './app-routing.module';
import { AgGridModule } from "ag-grid-angular";

describe("Router: App", () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        RouterModule,
        AgGridModule.withComponents([AppComponent])
      ],
      declarations: [AppComponent, DrawingComponent]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('navigate to "" redirects you to /', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/");
    });
  }));
});
