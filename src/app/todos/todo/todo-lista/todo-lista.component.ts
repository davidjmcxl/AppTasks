import { Store } from '@ngrx/store';
import { Todo } from './../models/todo.model';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';


@Component({
  selector: 'app-todo-lista',
  templateUrl: './todo-lista.component.html',
  styleUrls: ['./todo-lista.component.scss']
})
export class TodoListaComponent implements OnInit {
  todos:Todo[]= [];
  filtroActual!:filtrosValidos;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
   /*  this.store.select('todos').subscribe(todos => this.todos = todos); */
   this.store.subscribe(state=>{
      this.todos=state.todos;
      this.filtroActual=state.filtro;
   })
  }

}
