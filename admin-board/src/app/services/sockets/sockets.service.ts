import { Injectable } from '@angular/core'
import { Socket } from 'ngx-socket-io'

@Injectable({
	providedIn: 'root',
})
export class SocketsService {
	currentData = this.socket.fromEvent<any>('randomData')

	constructor(private socket: Socket) {}

	getData(id: string) {
		this.socket.emit('randomData', id)
	}
}
