import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { ComentEG} from '../shared/comentEG.model';
import { DestinationEGService } from './destinationEG.service';

@Component({
  selector: 'app-destinationEG',
  templateUrl: './destinationEG.component.html',
  styleUrls: ['./destinationEG.component.css']
})

export class DestinationEGComponent implements OnInit {
  comentEGs:ComentEG[];
  private subscription: Subscription;

  constructor(private dstnService: DestinationEGService) { }

  ngOnInit() {
    this.comentEGs = this.dstnService.getComentEGs();
    this.subscription = this.dstnService.ComentEGsChanged
    .subscribe(
      (comentEG: ComentEG[])=>{
        this.comentEGs=comentEG;
      }
    );
  }

  onEditItem(index: number){
    this.dstnService.startedEditing.next(index);
  }
  
  
  onDestroy(){
    this.subscription.unsubscribe();
  }

}
