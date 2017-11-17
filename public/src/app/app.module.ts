import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalsService } from './animals.service';
import { AnimalsNewComponent } from './animals-new/animals-new.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AnimalsNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AnimalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
