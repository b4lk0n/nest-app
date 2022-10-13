export interface Connection {
  protocol?: string
  host: string
  port?: number
}

export type TopologyConfigModuleOptions<ServiceName extends string> = {
  topologyConfig: Record<ServiceName, Connection>
}
