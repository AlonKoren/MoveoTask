import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string ='';

  setTitle(title: string){
    this.title= title;
  }

  onTitleChange(title: string) {
    this.setTitle(title)
  }
}
