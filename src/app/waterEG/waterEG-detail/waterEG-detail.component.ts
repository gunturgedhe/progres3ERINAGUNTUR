import { Component, OnInit, Input } from '@angular/core';
import { WaterEG } from '../waterEG.model';
import { WaterEGService } from '../waterEG.service';
import { ActivatedRoute, Params, Route, Router} from '@angular/router';

@Component({
  selector: 'app-waterEG-detail',
  templateUrl: './waterEG-detail.component.html',
  styleUrls: ['./waterEG-detail.component.css']
})
export class WaterEGDetailComponent implements OnInit {

  // @Input() waterEG:WaterEG;
  waterEG:WaterEG;
  id:number;

  constructor(private waterEGService:WaterEGService,
              private route:ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params 
    .subscribe(
      (params:Params)=>{
      this.id=+params['id'];
      this.waterEG=this.waterEGService.getWaterEG(this.id);
      }
    )
  }

  onAddDestinationEG(){
    this.waterEGService.addComentEGDestinationEG(this.waterEG.comentEG);
  }
  
  onEditWaterEG(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  
  onDeleteWaterEG(){
    this.waterEGService.deleteWaterEG(this.id);
    this.router.navigate(['/waterEGs']);
  }
}
