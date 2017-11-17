import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { Animal } from './animal';

@Injectable()
export class AnimalsService {
  animals: Animal[];
  // create a behavior subject that the compnents will be able to recognize when it is updated
  animalObserver = new BehaviorSubject(this.animals)

  constructor(private _http: Http) {
  }

  getAnimals() {
    this._http.get('/animals').subscribe(
      (animals) => {
        this.animals = animals.json();
        // update the behavior subject with the response from the server
        this.animalObserver.next(this.animals);
      },
      (error)=>{
        console.log('getAnimals errors:', error)
      })
  }

  addAnimal(animal: Animal) {
    this._http.post('/animals', animal).subscribe(
      (newAnimal)=>{
        // the new animal that was added to the db, was returned and we added it to the this.animals Observable and updated the BehaviorSubject
        this.animals.push(newAnimal.json());
        this.animalObserver.next(this.animals);
      },
      (errors)=>{
        console.log(errors);
      }
    )
  }

}
