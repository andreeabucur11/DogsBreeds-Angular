import { Component, OnInit } from '@angular/core';
import { DogsService } from './dogs.service';

@Component({
	selector: 'app-dogs',
	templateUrl: './dogs.component.html',
	styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

	public dogs: any = {};

	constructor(private readonly dogsService: DogsService) { }

	public async ngOnInit(){
		this.dogsService.getDogs().subscribe(
			(data) => this.dogs = data.message
		)
	}

}
