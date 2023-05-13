import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '../app/core/core.module';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { TokenInterceptor } from './shared/services/token.interceptor';
import { AuthService } from './shared/services/auth.service';
import { HttpRoutingService } from './shared/services/http-routing.service';
import { HeaderService } from './shared/services/header.service';
import { environment } from 'src/environments/environment.development';

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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
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
