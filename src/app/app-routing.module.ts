import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './core/component/counter/counter.component';
import { FlexlayoutComponent } from './core/component/flexlayout/flexlayout.component';
import { FormsComponent } from './core/component/forms/forms.component';
import { HomeComponent } from './core/component/home/home.component';
import { NavbarComponent } from './core/component/navbar/navbar.component';
import { NotfoundComponent } from './core/component/notfound/notfound.component';
import { PasswordComponent } from './core/component/password/password.component';
import { PipesComponent } from './core/component/pipes/pipes.component';
import { SignupComponent } from './core/component/signup/signup.component';
import { TableComponent } from './core/component/table/table.component';
import { Table2Component } from './core/component/table2/table2.component';
import { Task2Component } from './core/component/task2/task2.component';
import { ObservableComponent } from './core/component/observable/observable.component';
import { CustomDirectiveComponent } from './core/component/custom-directive/custom-directive.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading/lazy-loading.component';
import { PreloadingService } from './shared/services/preloading.service';
import { LoadingComponent } from './core/component/loading/loading.component';
import { LoginComponent } from './auth/component/login/login.component';
import { AuthGuard } from './auth/service/guard/auth.guard';
import { AccessGuard } from './auth/service/guard/access.guard';
import { LogoutGuard } from './auth/service/guard/logout.guard';
import { CanDeactiveGuardGuard } from './auth/service/guard/can-deactive-guard.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
  {
    // canActivateChild: [AccessGuard]
    path: 'app', component: NavbarComponent, canActivate: [AuthGuard], canActivateChild: [AccessGuard],children: [
      { path: 'home', component: HomeComponent },
      { path: 'table', component: TableComponent },
      { path: 'data', component: Table2Component },
      { path: 'emp', component: NavbarComponent },
      { path: 'password', component: PasswordComponent },
      { path: 'fx', component: FlexlayoutComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'task1', component: SignupComponent },
      { path: 'task2', component: Task2Component },
      { path: 'forms', component: FormsComponent, },
      { path: 'forms/:mode/:id', component: FormsComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'observables', component: ObservableComponent },
      { path: 'cusdir', component: CustomDirectiveComponent },
      { path: 'loading', component: LoadingComponent },
    ]
  },
  // lazy loading
  {
    path: 'lazy-loading', data: { preload: false },
    loadChildren: () => import(`./lazy-loading/lazy-loading.module`).then(m => m.LazyLoadingModule)
  },
  // pre loading
  {
    path: 'pre-loading', data: { preload: true },
    loadChildren: () => import(`./pre-loading/pre-loading.module`).then(m => m.PreLoadingModule)

  },

  { path: '**', component: NotfoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadingService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
