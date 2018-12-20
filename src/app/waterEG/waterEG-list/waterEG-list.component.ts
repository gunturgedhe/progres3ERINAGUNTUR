import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/';
import { WaterEG } from '../waterEG.model';
import { WaterEGService } from '../waterEG.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-waterEG-list',
  templateUrl: './waterEG-list.component.html',
  styleUrls: ['./waterEG-list.component.css']
})
export class WaterEGListComponent implements OnInit, OnDestroy {

  // @Output() waterEGWasSelected = new EventEmitter<WaterEG>();
  waterEGs:WaterEG[];
  subscription: Subscription;
  
  constructor(private waterEGService:WaterEGService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.waterEGService.waterEGsChanged
    .subscribe(
      (waterEGs: WaterEG[]) => {
        this.waterEGs = waterEGs;
      }
    );
    this.waterEGs = this.waterEGService.getWaterEGs();
  }

  // onWaterEGSelected(waterEG:WaterEG){
  //   this.waterEGWasSelected.emit(waterEG);
  // }
  onNewWAterEG(){
    this.router.navigate(['new'],{relativeTo: this.route})
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
