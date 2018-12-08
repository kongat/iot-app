import { Role } from './role';
import { Device } from './device';

export class User {

  id:  number;
  name: string;
  lastName: string ;
  email: string;
  password: string ;
  roles: Role[];
  devices: Device[];
}

