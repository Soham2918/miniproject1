import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniproject1';

  constructor(){}

  logoutMsg(){
    alert('LogedOut Successfully.....!!')
  }
}
