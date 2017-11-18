import { Pipe, PipeTransform } from '@angular/core';

/**
 * {{ collection | myPipe: searchTerm : expression }}
 * 
 * collection [Array] colecao a ser filtrada pelo termo digitado
 * searchTerm [string] termo que será usado no filtro em memoria. 
 * expression [Array<string>] Campos que serão usados na hora de fazer o like 
 * 
 * Exemplo:
 *  Filtrando por nome ou descricao de um projeto
 *       *ngFor="let item of (items | erasFilter: searchText : ['name', 'description'])"
 */
@Pipe({
  name: 'myFilter'
})

export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, propertiesName: string[]): any {
    if(!items) return [];
    //if( !args || args.length == 0 ) return items;
    if( !searchText ) return items;
    searchText = searchText.toLowerCase();

    return items.filter( it => {
      if( !propertiesName || propertiesName.length == 0 )  return it.toString().toLowerCase().includes(searchText);
      else {
        for (var i = 0; i < propertiesName.length; i++) {
          var propertyName = propertiesName[i];
          if( it[propertyName] && it[propertyName].toString().toLowerCase().includes(searchText) ){
            return true;
          }          
        }         
      }
      return false;     
    });
  }

}
