import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DataService } from './users/data.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // { path:'', component: AppComponent},
      { path:'users', loadChildren:'./users/users.module#UsersModule' },
      
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private dataService: DataService){
    dataService.getOnlineData().subscribe(
      (response) => {
        let arrayObject = JSON.parse(JSON.stringify(response));
        console.log(arrayObject['results'])
        dataService.saveCacheData(arrayObject);
        
      },
      (error) => {
        console.log("error "+error);
      }
    );
  }
}
