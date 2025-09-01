import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Layout } from './components/layout/layout';
import { Header } from './components/layout/header/header';
import { Main } from './components/layout/main/main';
import { Footer } from './components/layout/footer/footer';
import { Description } from './components/main/description/description';
import { Links } from './components/main/links/links';
import { RouterModule } from '@angular/router';
import { StackExchange } from './components/main/stack-exchange/stack-exchange';
import { Contact } from './components/main/contact/contact';
import { Loading } from './components/shared/loading/loading';

@NgModule({
  declarations: [
    App,
    Layout,
    Header,
    Main,
    Footer,
    Description,
    Links,
    StackExchange,
    Contact,
    Loading
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
