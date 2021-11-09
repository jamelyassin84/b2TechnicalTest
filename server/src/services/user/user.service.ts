import { User } from './../../Enteties/User.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {}

	async create(data: any): Promise<User> {
		return this.userRepository.save(data);
	}

	async findOne(condition: any): Promise<User> {
		return this.userRepository.findOne(condition);
	}
}