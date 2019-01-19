import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Book } from '../../models/Book';
import { Service } from '../../services/service';



@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit{

  index: number;
  book: Book;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public service: Service) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.service.bookList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleBook() {
    this.book.isLend = !this.book.isLend;
  }
  onLend() { 
    this.service.onToggleMedia();
  }
}
