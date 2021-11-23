import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { GradesComponent } from './grades/grades.component';
import { DatesheetComponent } from './datesheet/datesheet.component';
import { SeatingComponent } from './seating/seating.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    GradesComponent,
    DatesheetComponent,
    SeatingComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'App',
      component: AppComponent},
      {path: 'grades',
      component: GradesComponent},
      {path: 'datesheet',
      component: DatesheetComponent},
      {path: 'result',
      component: ResultComponent},
      {path: 'seating',
      component: SeatingComponent}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
