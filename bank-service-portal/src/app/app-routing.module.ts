import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthguardComponent } from './authguard/authguard.component';
import { CurrencyconverterComponent } from './currencyconverter/currencyconverter.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: CurrencyconverterComponent, canActivate: [AuthguardComponent]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthguardComponent]},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}