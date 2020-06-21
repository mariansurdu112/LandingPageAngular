import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, private route: ActivatedRoute, private authService: AuthService) { }

    loginForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)
    });
    ngOnInit() { }

    onLoggedin(data: any) {
        this.authService.login(data).subscribe(res => {
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('id_token', res.token);
            this.router.navigateByUrl('admin/dashboard');
        }, err => {
            alert(err.error.message);
        });
    }
}
