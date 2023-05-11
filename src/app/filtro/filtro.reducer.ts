

import { createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFilter } from './filtro.actions';
import { Action } from 'rxjs/internal/scheduler/Action';

export const estadoInicial:filtrosValidos='todos';


export const filtroReducer = createReducer<filtrosValidos>(
  estadoInicial,
  on(setFilter, (state:filtrosValidos,{filtro}) => filtro),


);


