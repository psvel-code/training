import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '../app/core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD
export class AppModule {
  api = environment.app_url;
  constructor(private http: HttpRoutingService, private headerService: HeaderService) { }
  ngOnInit() {

    this.http.getJson("message.json").subscribe((res) => {
      console.log(res);
    });
    this.headerService.setheader(
      this.api + 'login',
      'content-type',
      'application/json'
    );
  }
// app.comp.ts oninitt
}
=======
export class AppModule { }
>>>>>>> 2474530e9a5f6849a8f8de76b511085ff0becf5d
