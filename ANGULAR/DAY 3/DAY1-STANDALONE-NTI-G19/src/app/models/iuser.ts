export interface Iuser {
  name: string;
  email: string;
  password: string | undefined;
  age?: number | undefined;
  gender?: string;
  city?: string;
}
