import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { map } from "rxjs/operators";

// services
import { AuthService } from "../services/auth/auth.service";

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(private _router: Router, private _authService: AuthService) {}

  canActivate() {
    return this._authService.authState.pipe(
      map(user => {
        if (user) {
          this._router.navigate(["/"]);
        } else {
          return true;
        }
      })
    );
  }
}
