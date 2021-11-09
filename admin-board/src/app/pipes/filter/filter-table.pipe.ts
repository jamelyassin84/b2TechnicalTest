import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'filterTable',
})
export class FilterTablePipe implements PipeTransform {
	transform(data: any[], keyword: string) {
		if (!data || !keyword) {
			return data
		}
		return data.filter((rates: any) => {
			return rates.currency
				.toLocaleLowerCase()
				.includes(keyword.toLocaleLowerCase())
		})
	}
}
