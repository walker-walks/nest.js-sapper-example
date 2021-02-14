import { Module } from '@nestjs/common';
import { ControllerModule } from '../../interface/controller/controller.module';

@Module({
  imports: [
    ControllerModule,
  ],
})
export class ServerModule {}
