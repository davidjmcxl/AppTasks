import { Todo } from './../models/todo.model';
import { borrar, borrarCompletados, crear, editar, toggle, toggleAll } from './todo.actions';
import { createReducer, on } from '@ngrx/store';

export const estadoInicial:Todo[] = [
    new Todo ('Task 1'),
    new Todo ('Task 2'),
    new Todo ('Task 3' )
];

export const todoReducer = createReducer(
  estadoInicial,
  on(crear, (state,{texto}) => [...state,new Todo (texto)]),
  on(toggle, (state,{id}) => {
    return state.map(todo=>{
      if(todo.id===id){
        return {
          ...todo,
          completado:!todo.completado
        }
      }else{
        return todo;
      }
    })
  }),
  on(editar, (state,{id,texto}) => {
    return state.map(todo=>{
      if(todo.id===id){
        return {
          ...todo,
         texto
        }
      }else{
        return todo;
      }
    })
  }),
  on(borrar, (state,{id}) => state.filter(todo=>todo.id!==id)),
  on(toggleAll, (state,{completado}) => {
    return state.map(todo=>{

        return {
          ...todo,
          completado
        }

    })
  }),
  on(borrarCompletados,(state)=>{
    return state.filter(todo=>!todo.completado)
  })
);
