import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

// Material Modules
import {MdButtonModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdCardModule} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';


import {HomeComponent} from './components/home/home.component';
import {ProductComponent} from './components/product/product.component';
import {BoxComponent} from './components/product_grid/prodbox.component';
import {CartComponent} from './components/cart/cart.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {DetailComponent} from './components/detail_product/detail.component';
import {AuthComponent} from './components/login/login.component';
import {CartBarComponent} from './components/cartbar/cartbar.component';
import {RegisterComponent} from './components/register/register.component';
import {UserListComponent} from './components/users_list/user.component';
import {MovieComponent} from './components/movies/movie.component';

import {SpinnerModule} from './components/spinner/spinner.module';

const routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'details/:id',
    component: DetailComponent
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'userlist',
    component: UserListComponent,
  },
  {
    path: 'movielist',
    component: MovieComponent,
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    BoxComponent,
    CartComponent,
    WelcomeComponent,
    DetailComponent,
    AuthComponent,
    CartBarComponent,
    RegisterComponent,
    UserListComponent,
    MovieComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MdButtonModule,
    MdInputModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    MdCardModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SpinnerModule,
  ],
  bootstrap: [
    HomeComponent
  ]

})

export class AppModule {}
