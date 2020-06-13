import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { environment } from '../../environment';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })

 

export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public email: Observable<User>;

    url = "http://localhost:3000";
    

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
        return this.http.post<User>(`${this.url}/authenticate`, { email, password })
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
        return this.http.post(`${this.url}/register`, email);
    }

    getAll() {
        return this.http.get<User[]>(`${this.url}/loginUsers`);
    }

    // getById(id: string) {
    //     return this.http.get<User>(`${this.urlUser}/${id}`);
    // }

    // update(id, params) {
    //     return this.http.put(`${environment.apiUrl}/users/${id}`, params)
    //         .pipe(map(x => {
    //             // update stored user if the logged in user updated their own record
    //             if (id == this.userValue.id) {
    //                 // update local storage
    //                 const user = { ...this.userValue, ...params };
    //                 localStorage.setItem('user', JSON.stringify(user));

    //                 // publish updated user to subscribers
    //                 this.userSubject.next(user);
    //             }
    //             return x;
    //         }));
    // }

    // delete(id: string) {
    //     return this.http.delete(`${environment.apiUrl}/users/${id}`)
    //         .pipe(map(x => {
    //             // auto logout if the logged in user deleted their own record
    //             if (id == this.userValue.id) {
    //                 this.logout();
    //             }
    //             return x;
    //         }));
    // }
}