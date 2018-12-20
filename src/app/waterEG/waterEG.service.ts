import { Injectable } from '@angular/core';
import { WaterEG } from '../waterEG/waterEG.model';
import { Subject } from 'rxjs/Subject';
import { ComentEG } from '../shared/comentEG.model';
import { DestinationEGService } from '../destinationEG/destinationEG.service';

@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class WaterEGService {
  // waterEGsChanged: any;
  // waterEGChanged: any;
  waterEGsChanged= new Subject<WaterEG[]>();

  private waterEGs:WaterEG[]=[
    new WaterEG(' Pantai Bajul Mati','Pantai di Malang','./src/water/bajulmati1.JPG',[
      new ComentEG('LautnyaBiru','water')
    ]),
    new WaterEG('Pantai Batu Bengkung','Pantai di Malang','./src/water/bengkung5.JPG',[
      new ComentEG('LautnyaBiru','water')
    ]),
    new WaterEG('Pantai Balikambang','Pantai di Malang','./src/water/balikambang6.JPG',[
      new ComentEG('LautnyaBiru','water')
    ]),
    new WaterEG(' Pantai Bajul Mati','Pantai di Malang','./src/water/sendangbiru3.JPG',[
      new ComentEG('LautnyaBiru','water')
    ])
  ];

constructor(private dstnService: DestinationEGService) {}

    setWaterEGs(waterEGs: WaterEG[]){
    this.waterEGs = waterEGs;
    this.waterEGsChanged.next(this.waterEGs.slice())
  }

  getWaterEGs(){
    return this.waterEGs.slice();
  }

  addComentEGDestinationEG(comentEGs: ComentEG[]){
    this.dstnService.addComentEGs(comentEGs);
    // this.waterEGsChanged.next(this.waterEGs.slice());
  }

  getWaterEG(index:number){
    return this.waterEGs[index];
  }
  
  addWaterEG(waterEG: WaterEG){
    this.waterEGs.push(waterEG);
    this.waterEGsChanged.next(this.waterEGs.slice());
  }
  updateWaterEG(index:number, newWaterEG: WaterEG){
    this.waterEGs[index] = newWaterEG;
    this.waterEGsChanged.next(this.waterEGs.slice());
  }
  deleteWaterEG(index:number){
    this.waterEGs.splice(index,1);
    this.waterEGsChanged.next(this.waterEGs.slice());
  }
}
