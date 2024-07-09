export type CreateUserType = {
  name: string;
  email: string;
  passWord: string;
  phone: string;
  sex: string;
  provinceId: string;
  districtId: string;
  wardId: string;
  address: string;
  birthday: Date;
};

export type LoginType = {
  userName: string;
  password: string;
};
