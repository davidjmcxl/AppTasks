import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Todo[],  filtro:filtrosValidos): Todo[] {
    switch(filtro){
      case 'completados':
        return value.filter(todo=>todo.completado);
      case 'pendientes':
        return value.filter(todo=>!todo.completado);
      default:
        return value;

    }

  }

}
