import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyBHU8rwZ2e20EKgN4AKX1cpYlYvvL2Dfa0',
  authDomain: 'fir-1acfd.firebaseapp.com',
  databaseURL: 'https://fir-1acfd.firebaseio.com/',
  storageBucket: 'gs://fir-1acfd.appspot.com',
  messagingSenderId: 'fir-1acfd'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, 'my-app-name'),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
