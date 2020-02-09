import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private service: MyServiceService) {}
  title = 'my-app';
  items = []
  item = {}

  // ngOnInit() {
  //   const setItems = data => (this.items = data);
  //   this.http
  //     .request("GET", "http://localhost:3000/persons")
  //     .subscribe(setItems);
  // }

  ngOnInit() {
        const setItems = data => (this.items = data);
    this.service.getPersons()
      .subscribe(setItems);
  }

  showDetails(person) {
    console.log("details", person)
    // this.item=person
    this.item = Object.assign({}, person)
    console.log(this.item)
  }

  newPersonSelected(person) {
    this.item = person
    console.log(person)
  }
}
