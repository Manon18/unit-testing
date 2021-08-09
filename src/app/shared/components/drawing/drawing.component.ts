import {AfterViewInit, Component, OnInit} from '@angular/core';
import { fabric } from "fabric";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})
export class DrawingComponent implements OnInit, AfterViewInit {
  shapesForm: FormGroup;
  rectWidth: number;
  rectHeight: number;
  rect: any;

  constructor() { }

  public ngOnInit(): void {
    this.generateShapesGroup();
  }

  public ngAfterViewInit() {
    this.generateAllShapes();
  }

  public generateShapesGroup(): void {
    this.shapesForm = new FormGroup({
      "rect_width": new FormControl(),
      "rect_height": new FormControl()
    });
  }

  public generateAllShapes(): void {
    this.rect = new fabric.Rect({
      top: 100,
      left: 100,
      width: 60,
      height: 70,
      fill: 'red'
    });

    let canvas = new fabric.Canvas('c');

    let rec = new fabric.Rect({
      top: 10,
      left: 10,
      width: 75,
      height: 100,
      fill: '',
      stroke: 'blue',
      strokeWidth: 2
    });

    let cir = new fabric.Circle({
      top: 10,
      left: 100,
      radius: 50,
      fill: '',
      stroke: 'blue',
      strokeWidth: 2
    });

    let tri = new fabric.Triangle({
      top: 10,
      left: 200,
      width: 200,
      height: 100,
      fill: '',
      stroke: 'blue',
      strokeWidth: 2
    });

    let eli = new fabric.Ellipse({
      top: 150,
      left: 10,
      /* Try same values rx, ry => circle */
      rx: 75,
      ry: 50,
      fill: '',
      stroke: 'blue',
      strokeWidth: 4
    });

    let trapezoid = [ {x:-100,y:-50},{x:100,y:-50},{x:150,y:50},{x:-150,y:50} ];
    let emerald = [ 	{x:850,y:75},
      {x:958,y:137.5},
      {x:958,y:262.5},
      {x:850,y:325},
      {x:742,y:262.5},
      {x:742,y:137.5},
    ];
    let star4 = [
      {x:0,y:0},
      {x:100,y:50},
      {x:200,y:0},
      {x:150,y:100},
      {x:200,y:200},
      {x:100,y:150},
      {x:0,y:200},
      {x:50,y:100},
      {x:0,y:0}
    ];
    let star5 = [ 	{x:350,y:75},
      {x:380,y:160},
      {x:470,y:160},
      {x:400,y:215},
      {x:423,y:301},
      {x:350,y:250},
      {x:277,y:301},
      {x:303,y:215},
      {x:231,y:161},
      {x:321,y:161},];
    let shape = new Array(trapezoid,emerald,star4,star5);

    let polyg = new fabric.Polygon(shape[1], {
      top: 180,
      left: 200,
      fill: '',
      stroke: 'blue',
      strokeWidth: 2
    });

    canvas.add(rec, cir, tri, eli, polyg, this.rect);
    canvas.renderAll();
  }

  public submit(event: Event): void {
    this.rect.width = this.shapesForm.controls.rect_width.value;
    this.rect.height = this.shapesForm.controls.rect_height.value

    console.log(this.rect.width);
    console.log(this.rect.height);
  }

}
