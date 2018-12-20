import { ComentEG } from "../shared/comentEG.model";

export class WaterEG
{

    public name:string;
    public description:string;
    public imagePath:string;
    public comentEG:ComentEG[];
    public comentEGs:ComentEG[];

    constructor(name:string, desc:string, imagePath:string,comentEG:ComentEG[])
    {
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.comentEG=comentEG;
        this.comentEGs=comentEG;
    }

}
