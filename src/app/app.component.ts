import { Component } from '@angular/core';
import arrayWords from "../utils/words";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  limit = 10;
  words:any ;
  handleSlideChange(newLimit:number){
    this.limit = newLimit;
  }
  generate(){
    this.words = arrayWords.map((value,index) => {
      if(index < this.limit)
      return value.name;
    })
    console.log(this.words);
  }

}
