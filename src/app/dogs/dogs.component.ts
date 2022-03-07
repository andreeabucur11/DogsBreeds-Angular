import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from './dogs.service';

@Component({
	selector: 'app-dogs',
	templateUrl: './dogs.component.html',
	styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

	public dogs: Dog[] = []

	public searchString: string = "";

	constructor(private readonly dogService: DogService) { }

	public ngOnInit(){
		this.prepareDogs();
	}

	public prepareDogs(){
		this.dogService.getDogs().subscribe(
			(data) => {
				this.prepareDogsArray(data.message);
			}
		)
	}

	public prepareDogsArray(data: any) {
		for(const key in data){
			this.dogs.push(new Dog({
				breedName: key,
				subBreedNames: data[key]
			}))
		}
	}

}
