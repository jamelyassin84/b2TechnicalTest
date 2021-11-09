import { Component, OnInit } from '@angular/core'
import { navs } from './navs'

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	navs: any[] = navs

	constructor() {}

	ngOnInit(): void {}
}
