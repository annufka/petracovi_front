import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClock} from '@fortawesome/free-solid-svg-icons';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket} from '@fortawesome/free-solid-svg-icons';
import { faBalanceScale} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLock} from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faTelegram} from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {CarouselModule} from "ngx-bootstrap/carousel";
import { SaleComponent } from './sale/sale.component';
import { NewComponent } from './new/new.component';
import { NewsComponent } from './news/news.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SaleComponent,
    NewComponent,
    NewsComponent,
    ProductComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        NgbModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        MatTabsModule,
        CarouselModule.forRoot(),
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faPhone);
    library.addIcons(faClock);
    library.addIcons(faSearch);
    library.addIcons(faUser);
    library.addIcons(faShoppingBasket);
    library.addIcons(faBalanceScale);
    library.addIcons(faEnvelope);
    library.addIcons(faLock);
    library.addIcons(faGoogle);
    library.addIcons(faCcVisa);
    library.addIcons(faCcMastercard);
    library.addIcons(faFacebook);
    library.addIcons(faTelegram);
    library.addIcons(faInstagram);
  }
}
