import { Icons } from "@/components/icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export type OptionsType = {
  value: string | number;
  label: string;
};

export interface Paging {
  page?: number;

  name?: string;

  category?: string;

  limit?: number;

  priceSort?: string | null;

  dateSort?: string | null;
}

interface Image {
  id: number;
  url: string;
  parentId: number;
  isDeleted: boolean;
  createdAt: string;
}

interface ProductType {
  id: number;
  name: string;
  price: number;
  description: string;
  isDeleted: boolean;
  category: number;
  createdAt: string;
  images: Image[];
}

interface ResponseType<T> {
  data: T[];
  page: number;
  count: number;
  limit: number;
}

export type { ProductType, Image, ResponseType };
