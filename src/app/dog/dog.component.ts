import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DogsService } from '../dogs/dogs.service';

@Component({
	selector: 'app-dog',
	templateUrl: './dog.component.html',
	styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

	public subBreeds: any[] = [];
	public breed: string = "";
	public imagePath: string = "";

	constructor(
		private readonly dogsService: DogsService,
		private readonly activatedRoute: ActivatedRoute,
		private readonly router: Router
	) { }

	public async ngOnInit() {
		this.activatedRoute.params.subscribe(
			(params: Params) => {
				this.breed = params['name'];
			}
		);

		this.dogsService.getSubBreeds(this.breed).subscribe(
			(data) => {
				this.subBreeds = data.message;
			},
			(error) => {
				this.router.navigate(['**'])
			}
		);

		this.dogsService.getImageByBreed(this.breed).subscribe(
			(data) => {
					this.imagePath = data.message;
			},
		)
		
	}

}
