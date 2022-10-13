import { Inject, Injectable } from '@nestjs/common'
import { ConnectionService } from './connection.service'
import { Connection } from './types'

const DEFAULT_PROTOCOL = 'https'

@Injectable()
export class TopologyConfigService<ServiceName extends string>
  implements ConnectionService<ServiceName, Connection>
{
  constructor(
    @Inject('TOPOLOGY_CONFIG')
    private readonly config: Record<ServiceName, Connection>,
  ) {}

  getConnection(serviceName: ServiceName): Connection {
    const connection: Connection | undefined = this.config[serviceName]

    if (!connection) {
      throw new Error(
        `Missing connection configuration for the '${serviceName}' service`,
      )
    }

    if (!connection.host) {
      throw new Error(
        `Missing 'host' in a connection configuration for the '${serviceName}' service`,
      )
    }

    if (!connection.protocol) {
      connection.protocol = DEFAULT_PROTOCOL
    }

    return connection
  }

  getConnetionString(serviceName: ServiceName): string {
    const { protocol, host, port } = this.getConnection(serviceName)

    return `${protocol}://${host}${port ? `:${port}` : ''}`
  }
}
