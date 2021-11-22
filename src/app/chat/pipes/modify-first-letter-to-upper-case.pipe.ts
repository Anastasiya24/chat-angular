import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modifyFirstLetterToUpperCase'
})
export class ModifyFirstLetterToUpperCasePipe implements PipeTransform {

  transform(name: string): string {
    return name?.substring(0, 1)?.toUpperCase() || '';
  }

}
