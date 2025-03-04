import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], filtero: any): any {
    if (!items || !filtero) {
        return items;
    }
   

    var keys=Object.keys(filtero);

    return items.filter(item => item[keys[0]].toLowerCase().indexOf(filtero[keys[0]].toLowerCase()) !== -1 || item[keys[1]].toLowerCase().indexOf(filtero[keys[0]].toLowerCase()) !== -1);

}

}
