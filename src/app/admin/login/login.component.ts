import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, private route: ActivatedRoute) { }

    ngOnInit() { }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
        console.log(this.route);
        this.router.navigateByUrl('admin/dashboard');
    }
}
