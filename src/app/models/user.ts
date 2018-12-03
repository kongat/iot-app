import { Role } from './role.enum';
import { Device } from './device';

export class User {

  id:  number;
  name: string;
  lastName: string ;
  email: string;
  password: string ;
  role: string;
  devices: Device[];
}

