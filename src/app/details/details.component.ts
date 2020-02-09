import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges {
  @Input() person
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

  ngDoCheck() {
    console.log("change")
    console.log(this.person)
  }

}
