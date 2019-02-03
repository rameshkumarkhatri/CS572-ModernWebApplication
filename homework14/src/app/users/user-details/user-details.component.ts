import { Component, OnInit, Input, OnDestroy, Injectable } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Subscription, Observable } from 'rxjs';
import { DataService } from '../data.service';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Component({
  selector: 'component',//'app-user-details',
  template: `
       <h2>Hello {{fullName(userDetail[0])}}</h2>
  `,
  styles: []
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  @Input() id: number;
  userDetail;
  private subsription: Subscription;
  constructor(private router: ActivatedRoute, private dataService : DataService) {
    this.subsription = router.params.subscribe(param => {
      this.id = param['uuid']
      console.log(dataService.getUserByID(this.id));
      this.userDetail = dataService.getUserByID(this.id);

      


    })
  }

  ngOnInit() {
  }


  fullName(user){
    return user.name.title+' '+user.name.first+' '+user.name.last +'\n '+ user.gender;
  }
  ngOnDestroy() {
    this.subsription.unsubscribe();
  }

  
}


@Injectable()
export class MyActivateGuard implements CanActivate {
  constructor(private r:Router, private dataservice: DataService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log('res',this.dataservice.getUserByID(route.params.uuid))
   if(this.dataservice.getUserByID(route.params.uuid).length > 0) {
     return true
   }else{
    this.r.navigate([''])
   }

   return false;

  }
}