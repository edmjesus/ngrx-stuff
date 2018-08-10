import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html'
})
export class RegisterComponent {

    error: string;

    constructor(
        private _authService: AuthService,
        private _router: Router
    ) {}

    async registerUser(event: FormGroup) {
        const { email, password } = event.value;

        try {
            await this._authService.createUser(email, password);
            this._router.navigate(['/']);
        } catch (err) {
            this.error = err.message;
        }
    }
}