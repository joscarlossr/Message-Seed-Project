import { Routes } from "@angular/router";
import { LogoutComponent } from "./logout.component";
import { SigninComponent } from "./signin.component";
import { SignupComponent } from "./signup.component";

// Este path é relativo a /autenticacao
// Aqui temos as sub-rotas ("child routes")
export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent },
];