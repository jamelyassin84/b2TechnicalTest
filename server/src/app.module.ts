import { UserController } from './Controllers/User.controller';
import { User } from './Enteties/User.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './gateway/app.gateway';
import { UserService } from './services/user/user.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: '',
			database: 'b2Connect',
			entities: [User],
			// synchronize: true, //enable this to synchronize user table
		}),
		TypeOrmModule.forFeature([User]),
		JwtModule.register({
			secret: 'secret',
			signOptions: { expiresIn: '1d' },
		}),
	],
	controllers: [AppController, UserController],
	providers: [AppService, AppGateway, UserService],
})
export class AppModule {}
