import { DynamicModule, Module } from '@nestjs/common'
import { TopologyConfigService } from './topology-config.service'
import { TopologyConfigModuleOptions } from './types'

@Module({})
export class TopologyConfigModule {
  static register<ServiceName extends string>({
    topologyConfig,
  }: TopologyConfigModuleOptions<ServiceName>): DynamicModule {
    return {
      global: true,
      module: TopologyConfigModule,
      providers: [
        {
          provide: 'TOPOLOGY_CONFIG',
          useValue: topologyConfig,
        },
        TopologyConfigService,
      ],
      exports: [TopologyConfigService],
    }
  }
}
