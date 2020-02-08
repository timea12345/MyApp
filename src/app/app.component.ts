import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  items = [{id:1, name: "timea", adress:"cluj", email:"balogh@yahoo.com", number:"07329383"},
  {id:2, name: "alex", adress:"cluj",email:"alex@getMaxListeners.com", number:"072726263"},
  {id:3, name:"ana", adress:"cluj", email:"ana@yahoo.com", number: "03262727"}]
  item = {}

  showDetails(person) {
    console.log("details", person)
    // this.item=person
    this.item = Object.assign({}, person)
    console.log(this.item)
    
  }
}
