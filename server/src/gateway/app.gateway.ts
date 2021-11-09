import { Logger } from '@nestjs/common';
import {
	OnGatewayInit,
	SubscribeMessage,
	WebSocketGateway,
	WsResponse,
} from '@nestjs/websockets';
import { Observable } from 'rxjs';
import { Server } from 'socket.io';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit {
	private logger: Logger = new Logger('AppGateway');

	afterInit(server: Server) {
		this.logger.log('Sockets are ready!');
	}

	@SubscribeMessage('randomData')
	onEvent(client: any, payload: any): Observable<WsResponse<any>> | any {
		// Mocked the Cron Jobs by Setting Interval
		setInterval(() => {
			client.emit('randomData', { data: Math.floor(Math.random() * 10) });
		}, 1000);
	}
}
