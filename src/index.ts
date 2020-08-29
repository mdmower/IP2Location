import {DbReader} from './db-reader';
import {Ip2lOptions, Ip2lData} from './interfaces';

export default class Ip2lReader {
  /**
   * Query IP2Location database with an IP and get location information
   * @param ip IP address
   */
  get: (ip: string) => Ip2lData;

  /**
   * @param binPath Path to IP2Location bin database
   * @param options Options for database reader
   */
  constructor(binPath: string, options?: Ip2lOptions) {
    const dbReader = new DbReader();
    dbReader.init(binPath, options || <Ip2lOptions>{});

    this.get = dbReader.get.bind(dbReader);
  }
}

export {Ip2lData, Ip2lOptions, Ip2lReader};
