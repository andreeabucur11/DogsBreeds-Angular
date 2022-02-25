import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DogsService {

	public baseUrl = "https://dog.ceo/api";

	constructor(private httpClient: HttpClient) { }

	public getDogs(): Observable<any> {
		return this.httpClient.get<any>(this.baseUrl + '/breeds/list/all');

	}

	public getSubBreeds(breed: string) : Observable<any> {
		return this.httpClient.get<any>(`${this.baseUrl}/breed/${breed}/list`);


	}

	public getImageByBreed(breed: string): Observable<any> {
		return this.httpClient.get<any>(`https://dog.ceo/api/breed/${breed}/images/random`);
	
	}

	public getImageBySubBreed(breed: string, subBreed: string): Observable<any> {
		return this.httpClient.get<any>(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`);

	}
}
