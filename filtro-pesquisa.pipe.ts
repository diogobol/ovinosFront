import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal';

@Pipe({
  name: 'filtroPesquisa',
  pure: false
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaAnimais: Animal[], valor?:string): Animal[] {
    const nome = valor ?valor:"";
    return listaAnimais.filter(
      (animal) => animal.nome.includes(nome))
  }

}
