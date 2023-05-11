import { environment } from './../environments/environment';
import { todoReducer } from './todos/todo/redux/todo.reducer';
import { TodoModule } from './todos/todo/todo.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DerechosComponent } from './derechos/derechos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { appReducer } from './app.reducer';



@NgModule({
  declarations: [
    AppComponent,
    DerechosComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,TodoModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode


    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
