import { Component, OnInit } from '@angular/core'
import { icon, latLng, Map, marker, point, polyline, tileLayer } from 'leaflet'
import { IpService } from 'src/app/services/ip/ip.service'

@Component({
	selector: 'app-ip',
	templateUrl: './ip.component.html',
	styleUrls: ['./ip.component.scss'],
})
export class IpComponent implements OnInit {
	leaflet!: Map
	constructor(private ip_service: IpService) {}
	ip!: string
	ngOnInit(): void {}

	details: any = {}
	lookUp() {
		this.details = {}
		this.ip_service.getIP(this.ip).subscribe(
			(data) => {
				if (data.error !== undefined) {
					alert('IP not Found')
					return
				}
				this.details = data
				this.options = undefined
				this.location = marker(
					[this.details.latitude, this.details.longitude],
					{
						icon: icon({
							iconSize: [25, 41],
							iconAnchor: [13, 41],
							iconUrl: '../../../assets/images/map-icon.png',
						}),
					}
				)
				this.options = {
					layers: [
						tileLayer(
							'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
							{
								attribution:
									'&copy; OpenStreetMap contributors',
							}
						),
						this.location,
					],
					zoom: 14.26,
					center: latLng([
						this.details.latitude,
						this.details.longitude,
					]),
				}
			},
			(error) => {
				alert('IP not Found')
			}
		)
	}

	location: any = undefined
	options: any = {}
}
