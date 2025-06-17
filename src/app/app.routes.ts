import { Routes } from '@angular/router';
import { DetailsComponent } from './details.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, data: { animation: 'homePage' } },
    { path: 'details', component: DetailsComponent, data: { animation: 'detailsPage' } }
];