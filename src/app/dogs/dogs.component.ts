import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog.interface';
import { DogService } from './dogs.service';

@Component({
	selector: 'app-dogs',
	templateUrl: './dogs.component.html',
	styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

	public dogs: Dog = {
		message: {}
	};

	public allDogs: Dog = {
		message: {}
	}

	public searchString: string = "";

	constructor(private readonly dogsService: DogService) { }

	public ngOnInit(){
		this.prepareDogs();
	}

	public prepareDogs(){
		this.dogsService.getDogs().subscribe(
			(data) => {
				console.log(data);
				this.dogs = data.message;
				this.allDogs = data.message;
			}
		)
	}

	public filterDogs(){
		let dogsArray = Object.entries(this.allDogs);
		let filteredArr = dogsArray.filter(
			([key]) => {
				return key.includes(this.searchString);
			}
		);
		let newDogsArr: Dog = {
			message: {}
		}
		for(let breed of filteredArr){
			newDogsArr.message[breed[0].toString()] = breed[1];
		}
		this.dogs = newDogsArr.message;
	}

}
