import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DogService } from '../dogs/dogs.service';

@Component({
	selector: 'app-sub-breed',
	templateUrl: './sub-breed.component.html',
	styleUrls: ['./sub-breed.component.css']
})
export class SubBreedComponent implements OnInit {

	public subBreedName: string = "";
	public breedName: string = "";
	public imagePath: string = "";

	constructor(
		private readonly activatedRoute: ActivatedRoute,
		private readonly dogsService: DogService,
		private readonly router: Router
	) {
		this.activatedRoute.params.subscribe(
			(params: Params) => {
				this.breedName = params['name'];
				this.subBreedName = params['sub-breed'];
			}
		)
	}

	public ngOnInit() {
		this.prepareImageBySubBreedName(this.subBreedName);
	}

	public prepareImageBySubBreedName(subBreed: string){
		this.dogsService.getImagePathBySubBreed(this.breedName, this.subBreedName).subscribe(
			(data) => {
				this.imagePath = data.message;
			},
			(error) => {
				this.router.navigate(['**'])
			}
		)
	}

}
