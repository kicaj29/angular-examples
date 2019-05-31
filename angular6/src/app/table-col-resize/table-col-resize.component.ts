import {
  Component,
  OnInit,
  Renderer2
} from '@angular/core';
import { ColDef } from './col-def';
import { Row } from './row';

@Component({
  selector: 'app-table-col-resize',
  templateUrl: './table-col-resize.component.html',
  styleUrls: ['./table-col-resize.component.css']
})
export class TableColResizeComponent implements OnInit {

  public cols: ColDef[] = [];
  public rows: Row[] = [];

  start: any = undefined;
  pressed: boolean = false;
  startX: any;
  startWidth; any;
  resizableFnMousemove: () => void;
  resizableFnMouseup: () => void;

  constructor(private _renderer: Renderer2) {
    this.cols.push(new ColDef('col1', 150, 'prop1'));
    this.cols.push(new ColDef('col2', 150, 'prop2'));
    this.cols.push(new ColDef('col3', 150, 'prop3'));
    this.cols.push(new ColDef('col4', 150, 'prop4'));

    this.rows.push(new Row({
      prop1: '1val1',
      prop2: '1val2',
      prop3: '1val3',
      prop4: '1val4'
    }));

    this.rows.push(new Row({
      prop1: '2val1',
      prop2: '2val2',
      prop3: '2val3',
      prop4: '2val4'
    }));
  }

  resizeTable(event: any, column: any) {
    this.start = event.target;
    this.pressed = true;
    this.startX = event.pageX;
    this.startWidth = this.start.clientWidth;
    this.mouseMove(column);
  }

  mouseMove(column: any) {
    this.resizableFnMousemove = this._renderer.listen('document', 'mousemove', (event) => {
      if (this.pressed) {
        let width = this.startWidth + (event.pageX - this.startX);
        let index = this.start.cellIndex;
        column.width = width;
      }
    });
    this.resizableFnMouseup = this._renderer.listen('document', 'mouseup', (event) => {
      if (this.pressed) {
        this.pressed = false;
        this.resizableFnMousemove();
        this.resizableFnMouseup();
      }
    });
  };

  ngOnInit() {
  }

}
