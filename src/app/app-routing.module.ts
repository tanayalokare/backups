import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { ServiceExapmleComponent } from './service-exapmle/service-exapmle.component';

const routes: Routes = [
  {
    path:"more-example",
    component:ExampleComponent
  },
  {
    path:"service-example",
    component:ServiceExapmleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
