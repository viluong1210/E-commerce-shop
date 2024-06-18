export type CreateUserType = {
  name: string;
  email: string;
  passWord: string;
  phone: string;
  sex: string;
  regionId: number;
  cityId: number;
  vnwardId: number;
  address: string;
  birthday: string;
};

export type LoginType = {
  userName: string;
  password: string;
};
