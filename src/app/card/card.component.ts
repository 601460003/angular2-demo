import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  /**
   * 数据
   */
  msg:string[] = ['angular1','angular2','angular3'];
  firstname: string = 'Jimmy';
  my:boolean = false;

  /**
   *  点击事件
   */
  changeName() {
    this.firstname = 'Houssein';
    this.my =!this.my;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
