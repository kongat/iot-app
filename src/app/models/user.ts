import { Role } from './role.enum';
import { Device } from './device';

export class User {

  id:  number;
  name: string;
  surName: string ;
  email: string;
  password: string ;
  role: string;
  devices: Device[];
}

