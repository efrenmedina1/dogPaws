import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { FourmComponent } from './fourm/fourm.component'
import { DogListComponent } from './dog-list/dog-list.component'
import { ProfileComponent } from './profile/profile.component'



const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'fourm', component: FourmComponent },
  { path: 'doglist', component: DogListComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', component: HomeComponent  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
