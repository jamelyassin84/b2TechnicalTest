import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class IpService {
	constructor(private http: HttpClient) {}

	private access_key = 'cd560f919d72224db67f7a6342239728'

	getIP(address: string) {
		const url = `http://api.ipstack.com/${address}?access_key=${this.access_key}`
		return this.http.get<any>(url)
	}
}
