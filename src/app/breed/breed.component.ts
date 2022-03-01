import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DogService } from '../dogs/dogs.service';

@Component({
	selector: 'app-breed',
	templateUrl: './breed.component.html',
	styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit {

	public subBreedNames: string[] = [];
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

	public ngOnInit() {
		this.prepareSubBreedNames(this.breedName);
		this.prepareImagePath(this.breedName);
	}

	public prepareSubBreedNames(breedName: string) {
		this.dogService.getSubBreedNames(this.breedName).subscribe(
			(data) => {
				this.subBreedNames = data.message;
			},
			(error) => {
				this.router.navigate(['**'])
			}
		);
	}

	public prepareImagePath(breedName: string) {
		this.dogService.getImagePathByBreed(this.breedName).subscribe(
			(data) => {
				this.imagePath = data.message;
			},
		)
	}

}
