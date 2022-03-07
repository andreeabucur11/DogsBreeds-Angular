export class Dog{
    public breedName: string="";
    public subBreedNames: string[]=[];

    constructor(data: Partial<Dog>) {
        if(data) {
            Object.assign(this, data);
        }
    }
}