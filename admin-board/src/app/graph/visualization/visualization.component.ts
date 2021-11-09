import { SocketsService } from './../../services/sockets/sockets.service'
import { Component, OnInit } from '@angular/core'
import { ChartDataSets, ChartOptions } from 'chart.js'
import { Color, Label } from 'ng2-charts'
import { ChartConfig } from '../chartConfig'
import { startWith } from 'rxjs/operators'

@Component({
	selector: 'app-visualization',
	templateUrl: './visualization.component.html',
	styleUrls: ['./visualization.component.scss'],
})
export class VisualizationComponent implements OnInit {
	constructor(private socketService: SocketsService) {}

	public lineChartData: ChartDataSets[] | any = [
		{
			data: [],
			label: 'Series A',
		},
	]
	public lineChartLabels: Label[] = []
	public lineChartOptions: (ChartOptions & { annotation: any }) | any = {
		responsive: true,
	}
	public lineChartColors: Color[] = [
		{
			borderColor: '#DE3A74',
			backgroundColor: '#1E2D3B ',
		},
	]
	public lineChartLegend = true
	public lineChartPlugins = []

	ngOnInit() {
		this.getRandomData()
	}

	newData: any = ''

	getRandomData() {
		this.socketService.getData('message')
		this.socketService.currentData.pipe().subscribe((socket) => {
			this.newData = socket.data
			if (this.lineChartLabels.length > 25) {
				this.lineChartData[0].data.shift()
				this.lineChartLabels.shift()
			} else {
				this.lineChartData[0].data.push(socket.data)
				this.lineChartLabels.push(
					`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
				)
			}
		})
	}
}
