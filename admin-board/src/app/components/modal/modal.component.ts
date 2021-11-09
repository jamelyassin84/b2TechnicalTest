import { UserService } from './../../services/user/user.service'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
	constructor(private userService: UserService) {}

	username!: string
	password!: string

	ngOnInit(): void {}

	showModal = true

	login() {
		this.userService
			.login({
				password: this.password,
				username: this.username,
			})
			.subscribe(
				(data: any) => {
					console.log(data)
					localStorage.setItem('token', data.token)
					localStorage.setItem(
						'user',
						JSON.stringify({
							id: data.id,
							username: data.username,
						})
					)
					this.showModal = false
				},
				() => {
					alert('Invalid Credentials')
				}
			)
	}
}
