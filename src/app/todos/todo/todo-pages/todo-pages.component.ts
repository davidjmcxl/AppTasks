import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { toggleAll } from '../redux/todo.actions';

@Component({
  selector: 'app-todo-pages',
  templateUrl: './todo-pages.component.html',
  styleUrls: ['./todo-pages.component.scss']
})
export class TodoPagesComponent implements OnInit {
  completado: boolean = false;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }
  toggleAll(){
   this.completado = !this.completado;
  this.store.dispatch(toggleAll({completado:this.completado}));
  }

}
