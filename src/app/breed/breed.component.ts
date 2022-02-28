import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DogService } from '../dogs/dogs.service';

@Component({
	selector: 'app-breed',
	templateUrl: './breed.component.html',
	styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit {

	public subBreeds: string[] = [];
	public breedName: string = "";
	public imagePath: string = "";

	constructor(
		private readonly dogService: DogService,
		private readonly activatedRoute: ActivatedRoute,
		private readonly router: Router
	) {
		this.activatedRoute.params.subscribe(
			(params: Params) => {
				this.breedName = params['name'];
			}
		);
	}

	public async ngOnInit() {
		this.getSubBreeds(this.breedName);
		this.getImageByBreed(this.breedName);
	}

	public getSubBreeds(breedName: string) {
		this.dogService.getSubBreeds(this.breedName).subscribe(
			(data) => {
				this.subBreeds = data.message;
			},
			(error) => {
				this.router.navigate(['**'])
			}
		);

	}

	public getImageByBreed(breedName: string) {
		this.dogService.getImageByBreed(this.breedName).subscribe(
			(data) => {
				this.imagePath = data.message;
			},
		)
	}

}
