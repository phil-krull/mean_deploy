import { Component, OnInit } from '@angular/core';
import { AnimalsService } from './../animals.service';
import { Animal } from './../animal';
// import { AnimalsComponent } from './../animals/animals.component';

@Component({
  selector: 'app-animals-new',
  templateUrl: './animals-new.component.html',
  styleUrls: ['./animals-new.component.css']
})
export class AnimalsNewComponent implements OnInit {
  animal: Animal = new Animal();

  constructor(private _animalService: AnimalsService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._animalService.addAnimal(this.animal);
    this.animal = new Animal();
  }

}
