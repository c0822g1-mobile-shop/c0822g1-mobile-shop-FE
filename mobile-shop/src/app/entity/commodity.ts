import {Trademark} from "./trademark";

export interface Commodity {
  id?: number;
  name?: string;
  cpu?: string;
  capacity?: string;
  price?: number;
  image?: string;
  camera?: string;
  selfie?: string;
  screenSize?: string;
  guarantee?: string;
  origin?: string;
  description?: string;
  code_qr?: string;
  quantity?: number;
  trademark?: Trademark;
}
