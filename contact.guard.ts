import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable
({providedIn:'root'})

export class contactGuard implements CanActivate {




  constructor (private authService: AuthService,
    private router : Router) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

    if (this.authService.isAdmin())
      return true;
      else
      {
      this.router.navigate(['app-forbidden']);
      return false;
      }
  }

  



};
