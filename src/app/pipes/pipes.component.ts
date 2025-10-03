import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit{

  dateValue = '05-05-2025';
  totalMarks = 1200;
  marksObtained = 900;
  name = "Ashish samuel Thomson";

  ngOnInit() {
    
  }

}
