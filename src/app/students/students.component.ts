import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface StudentDetails {
  id: string;
  name: string;
  gender: string;
  marks: number;
  place: string;
  course: string;
}

const StudentsData: StudentDetails[] = [
  {id:'1', name:'Abhijith', gender:'Male', marks:200, place:'Kochi', course:'B.Tech'},
  {id:'2', name:'Rahul', gender:'Male', marks:185, place:'Chennai', course:'B.Sc'},
  {id:'3', name:'Amit', gender:'Male', marks:210, place:'Delhi', course:'B.Com'},
  {id:'4', name:'Vishnu', gender:'Male', marks:195, place:'Bangalore', course:'BCA'},
  {id:'5', name:'Sneha', gender:'Female', marks:220, place:'Mumbai', course:'B.Tech'},
  {id:'6', name:'Priya', gender:'Female', marks:205, place:'Hyderabad', course:'B.Sc'},
  {id:'7', name:'Anjali', gender:'Female', marks:215, place:'Pune', course:'B.Com'},
  {id:'8', name:'Meera', gender:'Female', marks:190, place:'Kolkata', course:'BCA'},
  {id:'9', name:'Divya', gender:'Female', marks:200, place:'Jaipur', course:'B.Tech'},
  {id:'10', name:'Riya', gender:'Female', marks:210, place:'Goa', course:'B.Sc'},
];

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  filterBy: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.studentsFullDetails.paginator = this.paginator;  
  }

  genderCategory = [
    {label:"Male",value:"male"},
    {label:"Female",value:"female"},
    {label:"All",value:"all"}
  ];

  studentsFullDetails = new MatTableDataSource<StudentDetails>(StudentsData);;

  columnHeaderNames: string[] = ['Id','Name','Gender','Marks','Place','Course']

}
