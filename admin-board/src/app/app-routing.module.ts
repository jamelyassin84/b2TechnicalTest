import { IpComponent } from './IP/ip/ip.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { VisualizationComponent } from './graph/visualization/visualization.component'
import { CurrencyExchangeComponent } from './exchange/currency-exchange/currency-exchange.component'

const routes: Routes = [
	{
		path: '',
		redirectTo: 'geo-location-details',
		pathMatch: 'full',
	},
	{
		path: 'geo-location-details',
		component: IpComponent,
	},
	{
		path: 'real-time-graph-visualization',
		component: VisualizationComponent,
	},
	{
		path: 'forex',
		component: CurrencyExchangeComponent,
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
