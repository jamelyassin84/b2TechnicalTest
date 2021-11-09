import { Component, OnInit } from '@angular/core'
import { CurrenciesService } from 'src/app/services/currency/currencies.service'

@Component({
	selector: 'app-currency-exchange',
	templateUrl: './currency-exchange.component.html',
	styleUrls: ['./currency-exchange.component.scss'],
})
export class CurrencyExchangeComponent implements OnInit {
	constructor(
		private currencyService: CurrenciesService,
		private exchangeService: CurrenciesService
	) {}

	amount = 0
	currencies: any = []
	ngOnInit(): void {
		this.getCurrencies()
		this.getExchangesRates()
	}

	getCurrencies() {
		this.currencyService.getCurrencies().subscribe((currencies) => {
			this.currencies = []
			for (let key in currencies) {
				this.currencies.push(key)
			}
		})
	}

	latestdate!: any
	exchangeRates: any = []
	getExchangesRates() {
		this.exchangeService.getExchangeRates().subscribe((exchange: any) => {
			this.latestdate = exchange.date
			let exchangeRates = []
			for (let key in exchange.rates) {
				exchangeRates.push({
					currency: key,
					value: exchange.rates[key],
				})
			}
			this.exchangeRates = exchangeRates
			console.log(exchangeRates)
		})
	}

	keyword: string = ''
}
