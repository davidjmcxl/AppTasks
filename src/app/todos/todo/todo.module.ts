import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListaComponent } from './todo-lista/todo-lista.component';
import { TodoPagesComponent } from './todo-pages/todo-pages.component';
import { FiltroPipe } from './filtro.pipe';



@NgModule({
  declarations: [
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListaComponent,
    TodoPagesComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  exports: [
    TodoPagesComponent
  ]
})
export class TodoModule { }
