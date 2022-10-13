export interface ConnectionService<ServiceName, Connection> {
  getConnection(serviceName: ServiceName): Connection
  getConnetionString(serviceName: ServiceName): string
}
