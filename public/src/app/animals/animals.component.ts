import { Component, OnInit } from '@angular/core';
import { AnimalsService } from './../animals.service';
import { Animal } from './../animal';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals: Animal[];

  constructor(private _animalService: AnimalsService) {
    // subscribe to the animals Observable in the service(which is a behavior subject)
    this._animalService.animalObserver.subscribe((animals)=>{
      this.animals = animals;
    })
  }


  ngOnInit() {
    console.log(this.animals)
    this._animalService.getAnimals();
  }

  getAnimals() {
    console.log('here');
  }

}
