import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WaterEG } from '../../waterEG.model';
import { WaterEGService } from '../../waterEG.service';

@Component({
  selector: 'app-waterEG-item',
  templateUrl: './waterEG-item.component.html',
  styleUrls: ['./waterEG-item.component.css']
})
export class WaterEGItemComponent implements OnInit {

  @Input() waterEG:WaterEG;
  @Input() index:number;
  // @Output() waterEGSelected = new EventEmitter<void>();
  
  // constructor(private waterEGService:WaterEGService) { }

  ngOnInit() {
  }

  // onSelected(){
  //   this.waterEGSelected.emit();
  //   this.waterEGService.waterEGSelected.emit(this.waterEG);
  // }

}
