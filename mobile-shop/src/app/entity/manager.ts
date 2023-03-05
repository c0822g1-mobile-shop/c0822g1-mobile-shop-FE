import {User} from "./user";
import {UserRole} from "./user-role";
import {Bill} from "./bill";

export interface Manager {
  id?: number;
  quantity?: number;
  name?: string;
  username?: string;
  password?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  age?: number;
  gender?: boolean;
  dateOfBirth?: string;
  userRole: UserRole;
  bill: Bill;
}
