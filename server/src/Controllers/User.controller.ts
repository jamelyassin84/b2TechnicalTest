import { UserService } from './../services/user/user.service';
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Controller()
export class UserController {
	constructor(private service: UserService) {}

	@Post('auth/register')
	async register(
		@Body('username') username: string,
		@Body('password') password: string,
	) {
		return this.service.create({
			username: username,
			password: await bcrypt.hash(password, 12),
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
	}
}
