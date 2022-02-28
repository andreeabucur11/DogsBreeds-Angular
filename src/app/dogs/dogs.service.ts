import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DogService {

	public baseUrl = "https://dog.ceo/api";

	constructor(private httpClient: HttpClient) { }

	public getDogs(): Observable<any> {
		return this.httpClient.get<any>(this.baseUrl + '/breeds/list/all');
	}

	public getSubBreeds(breedName: string) : Observable<any> {
		return this.httpClient.get<any>(`${this.baseUrl}/breed/${breedName}/list`);
	}

	public getImageByBreed(breedName: string): Observable<any> {
		return this.httpClient.get<any>(`https://dog.ceo/api/breed/${breedName}/images/random`);
	}

	public getImageBySubBreed(breedName: string, subBreedName: string): Observable<any> {
		return this.httpClient.get<any>(`https://dog.ceo/api/breed/${breedName}/${subBreedName}/images/random`);
	}
}
