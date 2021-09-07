import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AddressComponent } from './address/address.component'

const routes: Routes = [
  { path: 'home', component: AddressComponent },
  { path: '**', redirectTo: '/home' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
