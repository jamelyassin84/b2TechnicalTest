import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartsModule } from 'ng2-charts'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms'
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io'
import { LeafletModule } from '@asymmetrik/ngx-leaflet'

import { AppComponent } from './app.component'
import { IpComponent } from './IP/ip/ip.component'
import { VisualizationComponent } from './graph/visualization/visualization.component'
import { CurrencyExchangeComponent } from './exchange/currency-exchange/currency-exchange.component'
import { NavbarComponent } from './shared/navbar/navbar.component'
import { environment } from 'src/environments/environment'
import { FilterTablePipe } from './pipes/filter/filter-table.pipe';
import { ModalComponent } from './components/modal/modal.component'

const config: SocketIoConfig = {
	url: environment.socket,
	options: {
		transports: ['websocket', 'polling', 'flashsocket'],
	},
}

@NgModule({
	declarations: [
		AppComponent,
		IpComponent,
		VisualizationComponent,
		CurrencyExchangeComponent,
		NavbarComponent,
		FilterTablePipe,
  ModalComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ChartsModule,
		HttpClientModule,
		FormsModule,
		SocketIoModule.forRoot(config),
		LeafletModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
