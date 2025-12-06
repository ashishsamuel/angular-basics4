import { Injectable } from '@angular/core';
import { StudentDetails } from './students.component';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: StudentDetails[];

  constructor() { }

  filterStudentsByGender(filterBy: string) {
    if(filterBy.toLowerCase() === 'all' || this.students.length===0 || filterBy===''){
      return this.students;
    } else {
      return this.students.filter((stud)=>{
        return stud.gender.toLowerCase() === filterBy.toLowerCase();
      })
    }
  }
}
