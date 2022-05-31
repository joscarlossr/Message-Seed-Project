import { Routes, RouterModule } from "@angular/router";
import { AUTH_ROUTES } from "./auth/auth.routers";
import { AuthenticationComponent } from "./auth/authentication.component";
import { MessagesComponent } from "./messages/messages.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/mensagens', pathMatch: 'full' },
    { path: 'mensagens', component: MessagesComponent },
    { path: 'autenticacao', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const myrouting = RouterModule.forRoot(APP_ROUTES);