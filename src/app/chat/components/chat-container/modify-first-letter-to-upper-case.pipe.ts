import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'modifyFirstLetterToUpperCase',
})

export class ModifyFirstLetterToUpperCasePipe implements PipeTransform {
  transform(value: string): string {
    return value?.substring(0, 1)?.toUpperCase() || '';
  }
}

