import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProgrammeComponent } from './programme/programme.component'
import { AddressComponent } from './address/address.component'
import { BusinessComponent } from './business/business.component'

const routes: Routes = [
  { path: 'programmes/maleficent', component: ProgrammeComponent },
  { path: 'programmes/maleficent/businesses', component: BusinessComponent },
  { path: '**', redirectTo: '/programmes/maleficent' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
