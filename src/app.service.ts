import { TopologyConfigService } from '@app/topology-config'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  constructor(private readonly configService: TopologyConfigService) {}

  getHello(): string {
    return 'Hello World!'
  }
}
