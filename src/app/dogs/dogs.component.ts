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

}
