import { NestFactory } from '@nestjs/core';
import { ServerModule } from './infrastructure/server/server.module';
import sirv from 'sirv';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { endpoints } from './interface/api/api.conf';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

async function bootstrap() {
	const app = await NestFactory.create(ServerModule);

	app.setGlobalPrefix(endpoints.prefix);
	app.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({ignore: /^\/api(.*)/}),
	);

	await app.listen(PORT || 3000);
}
bootstrap();
