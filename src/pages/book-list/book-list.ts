import { Component } from '@angular/core';
import { Book } from '../../models/Book';
import { Service } from '../../services/service';
import { MenuController, ModalController } from 'ionic-angular';
import { LendBookPage } from '../lend-book/lend-book';


@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

    bookList: Book[];

  constructor(private service: Service,
              private menuCtrl: MenuController,
              private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.bookList = this.service.bookList.slice();
  }

  onLoadBook(index: number) {
    console.log("list Book");
    let modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
