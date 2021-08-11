import {Component, Input, OnInit, Output, EventEmitter, AfterViewInit, ViewEncapsulation, Inject} from '@angular/core';
import * as go from 'gojs';
import {fabric} from "fabric";
import {DOCUMENT} from "@angular/common";
import 'leader-line';
declare let LeaderLine: any;
// import LeaderLine from 'leader-line';

const $ = go.GraphObject.make;

@Component({
  selector: 'app-drag-n-drop-diagram',
  templateUrl: './drag-n-drop-diagram.component.html',
  styleUrls: ['./drag-n-drop-diagram.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DragNDropDiagramComponent implements OnInit, AfterViewInit {
  public isDragging: boolean;
  public dropZone: HTMLElement;
  public startEl: any;
  public endEl: any;
  public canvas = new fabric.Canvas('c');
  public start: any;
  public end: any;
  public isRightSide: boolean = false;
  public firstClick: boolean = false;
  public secondClick: boolean = false;

  public inBounds = true;
  public edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };

  public movementItems: any;

  constructor(@Inject(DOCUMENT) private document: any) {
    this.isDragging = false;
    this.dropZone = document.getElementById('dropZone') as HTMLElement;

    this.movementItems = [
      {name: 'Item 1', id: '1'},
      {name: 'Item 2', id: '2'},
      {name: 'Item 3', id: '3'},
      {name: 'Item 4', id: '4'},
      {name: 'Item 5', id: '5'},
      {name: 'Item 6', id: '6'},
      {name: 'Item 7', id: '7'},
      {name: 'Item 8', id: '8'},
      {name: 'Item 9', id: '9'},
      {name: 'Item 10', id: '10'},
      {name: 'Item 11', id: '11'},
      {name: 'Item 12', id: '12'},
      {name: 'Item 13', id: '13'},
      {name: 'Item 14', id: '14'},
      {name: 'Item 15', id: '15'},
      {name: 'Item 16', id: '16'},
      {name: 'Item 17', id: '17'},
    ]
  }

  ngOnInit(): void {

  }

  public ngAfterViewInit() {}

  public startDrag() {
    this.isDragging = true;
  }

  public endDrag() {
    this.isDragging = false;
  }

  public setEdge(event: any) {
    this.edge = event;
  }

  public drawLeaderLine(startElement: any, endElement: any) {
    let line = new LeaderLine(startElement, endElement);
    line.color = 'red';
    line.size++;
    line.path = 'straight';
  }

  public over(endElementIndex: any, item: any, event: any): void {
    this.end = document.getElementById(item.id);

    if (this.end) {
      event.target.classList.add('end');
    }

  }

  public getStartElement(startElIndex: any, item: any, event: any): void {
    this.isDragging = false;
    this.firstClick = true;

    let start = document.getElementById(item.id);

    if (start) {
      event.target.classList.add('start');
    }

    this.drawLeaderLine(this.end, start);
  }

  // public initDiagram() {
  //   const $ = go.GraphObject.make;
  //
  //   const diagram = $(go.Diagram,
  //     {
  //       'undoManager.isEnabled': true,
  //       model: $(go.GraphLinksModel, {
  //         linkKeyProperty: 'key'  // this should always be set when using a GraphLinksModel
  //       })
  //     });
  //
  //   diagram.nodeTemplate =
  //     $(go.Node, 'Auto',  // the Shape will go around the TextBlock
  //       $(go.Shape, 'RoundedRectangle', { strokeWidth: 0, fill: 'white' },
  //         // Shape.fill is bound to Node.data.color
  //         new go.Binding('fill', 'color')),
  //       $(go.TextBlock,
  //         { margin: 8 },  // some room around the text
  //         // TextBlock.text is bound to Node.data.key
  //         new go.Binding('text', 'key'))
  //     );
  //
  //   return diagram;
  // }

//   public state = {
//     // Diagram state props
//     diagramNodeData: [
//       { id: 'Alpha', text: "Alpha", color: 'lightblue' },
//       { id: 'Beta', text: "Beta", color: 'orange' }
//     ],
//     diagramLinkData: [
//       { key: -1, from: 'Alpha', to: 'Beta' }
//     ],
//     diagramModelData: { prop: 'value' },
//     skipsDiagramUpdate: false,
//
//     // Palette state props
//     paletteNodeData: [
//       { key: 'PaletteNode1', color: 'firebrick' },
//       { key: 'PaletteNode2', color: 'blueviolet' }
//     ]
//   }; // end state object
//
//   public diagramDivClassName: string = 'myDiagramDiv';
//   public paletteDivClassName = 'myPaletteDiv';
//
// // initialize diagram / templates
//   public initDiagram(): go.Diagram {
//     const $ = go.GraphObject.make;
//     const dia = $(go.Diagram, {
//       'undoManager.isEnabled': true,
//       model: $(go.GraphLinksModel,
//         {
//           nodeKeyProperty: 'id',
//           linkKeyProperty: 'key' // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
//         }
//       )
//     });
//
//     // define the Node template
//     dia.nodeTemplate =
//       $(go.Node, 'Auto',
//         $(go.Shape, 'RoundedRectangle', { stroke: null },
//           new go.Binding('fill', 'color')
//         ),
//         $(go.TextBlock, { margin: 8, editable: true },
//           new go.Binding('text').makeTwoWay())
//       );
//     return dia;
//   }
//
//   /**
//    * Handle GoJS model changes, which output an object of data changes via Mode.toIncrementalData.
//    * This method should iterate over thoe changes and update state to keep in sync with the FoJS model.
//    * This can be done with any preferred state management method, as long as immutability is preserved.
//    */
//   public diagramModelChange = function(changes: go.IncrementalData) {
//     console.log(changes);
//     // see gojs-angular-basic for an example model changed handler that preserves immutability
//     // when setting state, be sure to set skipsDiagramUpdate: true since GoJS already has this update
//   };
//
//   public initPalette(): go.Palette {
//     const $ = go.GraphObject.make;
//     const palette = $(go.Palette);
//
//     // define the Node template
//     palette.nodeTemplate =
//       $(go.Node, 'Auto',
//         $(go.Shape, 'RoundedRectangle', { stroke: null },
//           new go.Binding('fill', 'color')
//         ),
//         $(go.TextBlock, { margin: 8 },
//           new go.Binding('text', 'key'))
//       );
//
//     palette.model = $(go.GraphLinksModel,
//       {
//         linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
//       });
//
//     return palette;
//   }
}
