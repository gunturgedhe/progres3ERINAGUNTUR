import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ComentEG } from '../../shared/comentEG.model';
import { DestinationEGService } from '../destinationEG.service';

@Component({
  selector: 'app-destinationEG-edit',
  templateUrl: './destinationEG-edit.component.html',
  styleUrls: ['./destinationEG-edit.component.css']
})
export class DestinationEGEditComponent implements OnInit, OnDestroy {

  @ViewChild('f')dstnForm: NgForm;
  subscription: Subscription;
  editMode= false;
  editedItemIndex: number;
  editedItem: ComentEG;



  constructor(private cmService: DestinationEGService) { }

  ngOnInit() {
    this.subscription = this.cmService.startedEditing
    .subscribe(
      (index: number)=> {
        this.editedItemIndex= index;
        this.editMode= true;
        this.editedItem = this.cmService.getComentEG(index);
        this.dstnForm.setValue({
          name: this.editedItem.name,
          coment: this.editedItem.coment
        })
      }
    );
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newComentEG= new ComentEG(value.name, value.coment);
    if (this.editMode) {
      this.cmService.updateComentEG(this.editedItemIndex, newComentEG);
    } else {
      this.cmService.addComentEG(newComentEG); 
    }
    this.editMode=false;
    form.reset();
        // this.slsService.addIngredient(newIngredient);
        // this.ingredientAdded.emit(newIngredient);
  }

  onClear(){
    this.dstnForm.reset();
    this.editMode=false;
  }

  onDelete() {
    this.cmService.deleteComentEG(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
