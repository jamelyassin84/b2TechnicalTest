import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

@Injectable({
	providedIn: 'root',
})
export class CurrenciesService {
	constructor(private http: HttpClient) {}

	private exchangeURL = environment.exchangeRateAPI
	private access_key = `8750411a0c8129d587c608c635371e29`

	getCurrencies() {
		return this.http.get(
			`https://openexchangerates.org/api/currencies.json`
		)
	}

	getExchangeRates() {
		const url = `${this.exchangeURL}access_key=${this.access_key}`
		return this.http.get(url)
	}
}
