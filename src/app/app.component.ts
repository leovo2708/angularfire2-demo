import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterText: string;
  isEditing = false;
  editingKey = '';
  editingProduct: Product;
  productName: string;
  productPrice: number;
  products: FirebaseListObservable<any[]>;
  nameSubject: Subject<any>;

  constructor(private db: AngularFireDatabase) {
    this.nameSubject = new Subject();
    this.onFilterChange();
  }

  add() {
    const product: Product = {
      name: this.productName,
      price: this.productPrice
    };
    this.products.push(product);
  }

  delete(key: string) {
    this.products.remove(key);
  }

  update(key: string, product: any) {
    this.isEditing = true;
    this.editingKey = key;
    this.editingProduct = product;
  }

  stopEditing() {
    this.isEditing = false;
  }

  save() {
    this.products.update(this.editingKey, this.editingProduct);
    this.stopEditing();
  }

  deleteAll() {
    this.products.remove();
  }

  filter() {
    this.onFilterChange();
    //this.nameSubject.next(this.filterText);
  }

  private onFilterChange() {
    if (this.filterText) {
      this.products = this.db.list('/products', {
        query: {
          orderByChild: 'name',
          equalTo: this.filterText
        }
      });
    } else {
      this.products = this.db.list('/products');
    }
  }
}
