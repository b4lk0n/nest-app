import { Module } from '@nestjs/common'
import { TopologyConfigModule } from '@app/topology-config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import topologyConfig from '../config/topology.json'

@Module({
  imports: [
    TopologyConfigModule.register<TopologyServiceNames>({
      topologyConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
