import { ComentEG } from '../shared/comentEG.model';
import { Subject } from 'rxjs/Subject';

// @Injectable({
//   providedIn: 'root'
// })
export class DestinationEGService {
ComentEGsChanged=new Subject<ComentEG[]>();
startedEditing = new Subject<number>();
private comentEGs:ComentEG[]=[
  new ComentEG('LautnyaBiru','water'),
  new ComentEG('LautnyaBiru','water'),
  new ComentEG('LautnyaBiru','water'),
  new ComentEG('LautnyaBiru','water')
];
// constructor() { }

getComentEGs(){
  return this.comentEGs.slice();
}

getComentEG(index: number){
  return this.comentEGs[index];
}

addComentEG(comentEG:ComentEG){
  this.comentEGs.push(comentEG);
  this.ComentEGsChanged.next(this.comentEGs.slice());
}

addComentEGs(comentEG:ComentEG[]){
  this.comentEGs.push(...comentEG);
  this.ComentEGsChanged.next(this.comentEGs.slice());
}

updateComentEG(index: number, newComentEG: ComentEG ){
  this.comentEGs[index] = newComentEG;
  this.ComentEGsChanged.next(this.comentEGs.slice());
}

deleteComentEG(index: number){
  this.comentEGs.splice(index,1);
  this.ComentEGsChanged.next(this.comentEGs.slice());
}
}
