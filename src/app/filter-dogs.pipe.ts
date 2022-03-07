import { Pipe, PipeTransform } from '@angular/core';
import { Dog } from './dog';

@Pipe({
  name: 'filterDogs'
})
export class FilterDogsPipe implements PipeTransform {

  transform(dogs: Dog[], searchString: string): Dog[] {
    if(!searchString){
      return dogs;
    }
		return dogs.filter(
			(dog: Dog) => {
				return dog.breedName.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
			}
		)
  }

}
