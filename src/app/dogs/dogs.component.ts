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
		message: {},
		status: ""
	};

	constructor(private readonly dogsService: DogService) { }

	public ngOnInit(){
		this.prepareDogs();
	}

	public prepareDogs(){
		this.dogsService.getDogs().subscribe(
			(data) => this.dogs = data.message
		)
	}

}
