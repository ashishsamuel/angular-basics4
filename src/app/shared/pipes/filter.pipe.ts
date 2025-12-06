import { Pipe, PipeTransform } from '@angular/core';
import { StudentDetails } from 'src/app/students/students.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: StudentDetails[],filterBy: string) {
    if(filterBy.toLowerCase() === 'all' || list.length===0 || filterBy===''){
      return list;
    } else {
      return list.filter((stud)=>{
        return stud.gender.toLowerCase() === filterBy.toLowerCase();
      })
    }
  }

}
