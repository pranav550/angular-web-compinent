import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomComponent } from './custom/custom.component';
import { MywcComponent } from './mywc/mywc.component';

@NgModule({
  declarations: [AppComponent, CustomComponent, MywcComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  //bootstrap: [AppComponent],
  entryComponents: [MywcComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const customElement = createCustomElement(MywcComponent, {
      injector: this.injector,
    });
    customElements.define('custom-element', customElement);
  }
}
