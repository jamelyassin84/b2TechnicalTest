import { UserService } from './services/user/user.service';
import {
	BadRequestException,
	Body,
	Controller,
	Get,
	Logger,
	Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Controller('api')
export class AppController {
	constructor(
		private readonly service: UserService,
		private jwtService: JwtService,
	) {}

	@Post('auth/register')
	async register(
		@Body('username') username: string,
		@Body('password') password: string,
	) {
		const hashed = await bcrypt.hash(password, 12);
		return this.service.create({
			username: username,
			password: hashed,
		});
	}

	@Post('auth/login')
	async login(
		@Body('username') username: string,
		@Body('password') password: string,
	) {
		const user = await this.service.findOne({ username });

		if (!user) {
			throw new BadRequestException('User not Found');
		}

		if (!(await bcrypt.compare(password, user.password))) {
			throw new BadRequestException('Password is incorrect');
		}

		const token = await this.jwtService.signAsync({
			token: user.id,
		});

		return Object.assign({
			token,
			username: user.username,
			id: user.id,
		});
	}
}
