import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { WaterEGService } from '../waterEG.service';



@Component({
  selector: 'app-waterEG-edit',
  templateUrl: './waterEG-edit.component.html',
  styleUrls: ['./waterEG-edit.component.css']
})
export class WaterEGEditComponent implements OnInit {
  id:number;
  editMode=false;
  waterEGForm: FormGroup;

  constructor(private route:ActivatedRoute,
              private waterEGService: WaterEGService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id =+ params['id'];
        this.editMode=params['id']!=null;
        this.initForm();


      }
    );
  }

  onSubmit(){





    if(this.editMode){
      this.waterEGService.updateWaterEG(this.id, this.waterEGForm.value);
    }else{
      this.waterEGService.addWaterEG(this.waterEGForm.value);
    }
    this.onCancel();
  }

  onAddComentEG(){
    (<FormArray>this.waterEGForm.get('comentEGs')).push(
      new FormGroup({
        'name' : new FormControl(null, Validators.required),
        'coment' : new FormControl(null, Validators.required)      
      
            
      
      })
    );
  }

  onDeleteComentEG(index: number){
    (<FormArray>this.waterEGForm.get('comentEGs')).removeAt(index);
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm(){
    let waterEGName = '';
    let waterEGImagePath = '';
    let waterEGDescription = '';
    let waterEGComentEGs = new FormArray([]);


    if (this.editMode) {
      const waterEG = this.waterEGService.getWaterEG(this.id);
      waterEGName = waterEG.name;
      waterEGImagePath = waterEG.imagePath;
      waterEGDescription = waterEG.description;
      if (waterEG['comentEGs']){
        for (let comentEG of waterEG.comentEGs){ 
          waterEGComentEGs.push(
            new FormGroup({
              'name': new FormControl(comentEG.name, Validators.required),
              'coment' : new FormControl(comentEG.coment, Validators.required)



            })
          );
        }
      }
    }

    this.waterEGForm = new FormGroup({
      'name' : new FormControl(waterEGName, Validators.required),
      'imagePath': new FormControl(waterEGImagePath, Validators.required),
      'description' : new FormControl(waterEGDescription, Validators.required),
      'comentEGs' : waterEGComentEGs
    });
  }  

}
