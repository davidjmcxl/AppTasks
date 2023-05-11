import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-derechos',
  templateUrl: './derechos.component.html',
  styleUrls: ['./derechos.component.scss']
})
export class DerechosComponent implements OnInit {
  public date:Date= new Date;
  year!:number;

  constructor() { }

  ngOnInit(): void {
    this.year =this.date.getFullYear();

  }

}
