import { CollapseProps } from "antd";
import { NavbarMenu } from "@/types/productType";

export const navbarMenu: NavbarMenu[] = [
  {
    label: "Sản Phẩm",
    key: "product",
    url: "/products",
    // children: [
    //   {
    //     type: 'group',
    //     label: 'Item 1',
    //   },
    //   {
    //     type: 'group',
    //     label: 'Year end sale',
    //   },
    //   {
    //     type: 'group',
    //     label: 'Year end sale',
    //   },
    //   {
    //     type: 'group',
    //     label: 'Year end sale',
    //   },
    //   {
    //     type: 'group',
    //     label: 'Year end sale',
    //   },
    // ],
  },
  {
    label: "Giỏ Hàng",
    key: "cart",
    url: "/cart",
  },
  {
    label: "Về chúng tôi",
    key: " aboutUs",
    url: "/aboutUs",
  },
];

export const collapseItems: CollapseProps["items"] = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>Trẻ em</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>Nữ</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>Nam</p>,
  },
];

export const linkCarouselImageHome = [
  "https://pubcdn.ivymoda.com/files/news/2024/01/23/a86a7cf41073c8358a3c8a0a73bc47a1.jpg",
  "https://pubcdn.ivymoda.com/files/news/2024/01/18/931daf0ed5d768f096674d1958b9feee.jpg",
];
