export type Products = {
  id: string;
  mainImage: string;
  hoverImage: string;
  infoProduct: {
    listColor: string[];
    favorite: boolean;
    titleProduct: string;
    priceProduct: {
      sale: string;
      originPrice: string;
    };
    listSize: string[];
    voucher: string;
  };
};
export type ProductDetail = {
  listImage: string[];
  voucher: string;
  name: string;
  id: string;
  priceProduct: {
    sale: string;
    originPrice: string;
  };
  listSize: string[];
  use: string;
  detail: {
    branch: string;
    group: string;
  };
  introduce: string;
  listColor: string[];
};
export type ChildrenMenu = {
  label: string;
  url?: string;
  children?: MenuItem[];
};
export type MenuItem = {
  label: string;
  key: string;
  url?: string;
};
export type NavbarMenu = MenuItem & {
  children?: ChildrenMenu[];
};

export type Province = {
  Id: string;
  Name: string;
  Districts?: Districts[];
};

export type Districts = {
  Id: string;
  Name: string;
  Wards: Wards[];
};
export type Wards = {
  Id?: string;
  Name?: string;
  Level: string;
};
