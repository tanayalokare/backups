import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserModule } from './user/user.module';
import { ExampleComponent } from './example/example.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {MatDividerModule} from '@angular/material/divider';
import { ReusablechildComponent } from './reusablechild/reusablechild.component';
import { ChildtestComponent } from './childtest/childtest.component';
import { CustomStyleDirective } from './custom-style.directive';
import { ServiceExapmleComponent } from './service-exapmle/service-exapmle.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ExampleComponent,
    ParentComponent,
    ChildComponent,
    ReusablechildComponent,
    ChildtestComponent,
    CustomStyleDirective,
    ServiceExapmleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,MatDividerModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
