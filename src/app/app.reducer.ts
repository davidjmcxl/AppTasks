import { setFilter, filtrosValidos } from './filtro/filtro.actions';
import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/todo/models/todo.model";
import { todoReducer } from "./todos/todo/redux/todo.reducer";
import { filtroReducer } from './filtro/filtro.reducer';

export interface AppState {
  todos: Todo[];
  filtro:filtrosValidos;
}
export const appReducer:ActionReducerMap<AppState>={
  todos:todoReducer,
  filtro:filtroReducer

}
