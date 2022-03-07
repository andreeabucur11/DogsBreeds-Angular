import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from './dogs.service';

@Component({
	selector: 'app-dogs',
	templateUrl: './dogs.component.html',
	styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

	public filteredDogs: Dog[] = []

	public allDogs: Dog[] = [];
	public searchString: string = "";

	constructor(private readonly dogsService: DogService) { }

	public ngOnInit(){
		this.prepareDogs();
	}

	public prepareDogs(){
		this.dogsService.getDogs().subscribe(
			(data) => {
				this.prepareDogsArray(data.message);
				this.allDogs = this.filteredDogs;
				console.log(this.allDogs);

			}
		)
		
	}

	public prepareDogsArray(data: any) {
		for(const key in data){
			this.filteredDogs.push(new Dog({
				breedName: key,
				subBreedNames: data[key]
			}))
		}
	}

	// public filterDogs(event: any){
	// 	const searchString: string = event.target.value;
	// 	this.filteredDogs = this.allDogs.filter(
	// 		(dog: Dog) => {
	// 			return dog.breedName?.includes(searchString);
	// 		}
	// 	)
	// }

	public transform(wholeText: string): string {
		if (!this.searchString) {
		  return wholeText[0].toUpperCase() + wholeText.slice(1);
		}
	  
		const re = new RegExp(this.searchString, 'gi');
		wholeText = wholeText[0].toUpperCase() + wholeText.slice(1);
		wholeText = wholeText.replace(re, '<mark class="highlighter">$&</mark>');
		
		return wholeText;
	  }

}
