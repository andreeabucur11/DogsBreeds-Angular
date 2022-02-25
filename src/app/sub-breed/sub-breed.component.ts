import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DogsService } from '../dogs/dogs.service';

@Component({
  selector: 'app-sub-breed',
  templateUrl: './sub-breed.component.html',
  styleUrls: ['./sub-breed.component.css']
})
export class SubBreedComponent implements OnInit {

  public subBreed: string = "";
	public breed: string = "";
  public imagePath: string = "";

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly dogsService: DogsService,
    private readonly router: Router
    ) { }

  public async ngOnInit() {
    this.activatedRoute.params.subscribe(
			(params: Params) => {
				this.breed = params['name'];
        this.subBreed = params['sub-breed'];
			}
		)
   
    this.dogsService.getImageBySubBreed(this.breed, this.subBreed).subscribe(
      (data) => {
        this.imagePath = data.message;
      },
      (error) => {
				this.router.navigate(['**'])
			}
    )

    
  }

}
