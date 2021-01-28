import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MdcIconButtonModule } from '@angular-mdc/web';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { HeaderNavComponent } from './shared/components/header-nav/header-nav.component';
import { HeaderSearchInputComponent } from './shared/components/header-search-input/header-search-input.component';
import { RefDirective } from './shared/ref.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderNavComponent,
    HeaderSearchInputComponent,
    RefDirective
  ],
  imports: [
    BrowserModule,
    MdcIconButtonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
