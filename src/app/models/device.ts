import { Room } from './room';
import { DeviceType } from './device-type';
import { User } from './user';

export class Device {

  id: number;
  value: number;
  status: boolean;
  name: string;
  room: Room;
  deviceType: DeviceType;
  users: User[];
}
