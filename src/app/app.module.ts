import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,  Routes,  RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ROUTES } from './routes';


import { AppComponent } from './app.component';
import { CreatetaskComponent } from './createtask/createtask.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatetaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     RouterModule.forRoot(ROUTES)
  ],
  providers: [CreatetaskComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
