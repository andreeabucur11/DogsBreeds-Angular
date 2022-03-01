import { Routes } from "@angular/router";
import { BreedComponent as BreedComponent } from "./breed/breed.component";
import { DogsComponent } from "./dogs/dogs.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SubBreedComponent } from "./sub-breed/sub-breed.component";

export const AppRoutes: Routes = [
    {
        path: '',
        component: DogsComponent
    },
    {
        path: 'breed/:name',
        component: BreedComponent
    },
    {
        path:'breed/:name/:sub-breed',
        component: SubBreedComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path:'**',
        redirectTo: "not-found"
    }
]