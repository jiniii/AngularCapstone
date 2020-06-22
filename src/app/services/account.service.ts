import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })



export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public email: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('email')));
        this.email = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(email, password) {
        return this.http.post<User>(`${environment.apiUrl}/authenticate`, { email, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('email', JSON.stringify(email));
                this.userSubject.next(email);
                return email;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('email');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    register(email: User) {
        return this.http.post(`${environment.apiUrl}/register`, email);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/loginUsers`);
    }

}