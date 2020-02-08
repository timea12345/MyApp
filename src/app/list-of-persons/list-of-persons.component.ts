import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-of-persons',
  templateUrl: './list-of-persons.component.html',
  styleUrls: ['./list-of-persons.component.css']
})
export class ListOfPersonsComponent implements OnInit {
  @Input() persons
  @Input() showDetails
  constructor() { }

  ngOnInit(): void {
  }

}

