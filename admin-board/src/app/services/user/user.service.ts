import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private http: HttpClient) {}

	login(data: any) {
		return this.http.post(`${environment.api}auth/login`, data, {
			headers: new HttpHeaders({
				'content-type': 'application/json',
			}),
		})
	}
}
