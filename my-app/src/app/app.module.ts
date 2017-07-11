import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { HeroService }         from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent  } from './hero-detail.component';
import { AppComponent }        from './app.component';
import { DashboardComponent }  from './dashboard.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
        },
        {
          path:'heroes',
          component:HeroesComponent
        },
        {
          path:'dashboard',
          component:DashboardComponent
        }
    ])
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }







 
 


