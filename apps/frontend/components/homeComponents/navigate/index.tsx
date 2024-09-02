"use client";

import React, { useState } from "react";
import "@/styles/component/navbar.css";
import { Badge, Collapse, Drawer, Select, Space } from "antd";
import { collapseItems, navbarMenu } from "@/mock/menuProps";
import SearchInput from "@/components/homeComponents/SearchInput";
import {
  CloseOutlined,
  DownOutlined,
  MenuOutlined,
  MinusOutlined,
  PlusOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import RegisterButton from "@/components/homeComponents/RegisterButton";
import { ChildrenMenu, MenuItem, NavbarMenu } from "@/types/productType";
import ListCart from "@/components/homeComponents/ListCart";
import { useRouter } from "next/navigation";

const Navigate: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openNavbarMenu, setOpenNavbarMenu] = useState(false);
  const router = useRouter();
  // const navigate = useNavigate()

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const renderLogo = () => {
    return (
      <div style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
        <img
          src="https://pubcdn.ivymoda.com/ivy2/images/logo.png"
          className="w-[140px] h-auto"
        />
      </div>
    );
  };
  const renderShoppingCard = () => {
    return (
      <>
        <div onClick={showDrawer}>
          <Badge count={5}>
            <ShoppingOutlined className="text-xl" />
          </Badge>
        </div>
        <Drawer title="Giỏ hàng " onClose={onClose} open={open}>
          <ListCart />
        </Drawer>
      </>
    );
  };

  const handleChange = () => {};

  const languageOptions = [
    {
      label: "English",
      value: "eng",
    },
    {
      label: "Japanese",
      value: "jp",
    },
  ];

  return (
    <div className="w-full navbar relative">
      <div className="w-11/12 bg-white fixed z-50 top-0 xl:left-20 left-5 responsive-screen-laptop hidden lg:flex flex-col justify-between items-center h-max pt-4">
        <div className="lg:flex flex-row justify-between items-center w-full mb-4 pl-2">
          <div className="flex gap-5 justify-start">
            {navbarMenu?.map((item: NavbarMenu, index: number) => {
              return (
                <div
                  onClick={() => router.push(item.url)}
                  key={index}
                  className="navbar-menu"
                >
                  <span className="text-xs text-[#221F20] font-semibold uppercase">
                    {" "}
                    {item.label}
                  </span>
                  {item?.children && (
                    <div className="dropdown-menu justify-between absolute bg-white rounded-md border p-5 -left-1 xl:-left-5 animation:wiggle">
                      {item.children.map((value: ChildrenMenu, i: number) => (
                        <div key={i}>
                          <span className="text-[#373737] font-semibold mb-2">
                            {value.label}
                          </span>
                          {value.children?.map(
                            (child: MenuItem, inx: number) => (
                              <div key={inx}>
                                <span className="text-[#57585A] text-sm mb-2 font-normal">
                                  {child.label}
                                </span>
                              </div>
                            ),
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div>{renderLogo()}</div>
          <Select
            className="filter-product-item lg:w-[240px]"
            placeholder="Categorys"
            onChange={handleChange}
            options={languageOptions}
            suffixIcon={<DownOutlined className="text-sm" />}
          />
          <div className="search-component w-1/4 flex flex-row items-center h-full gap-5">
            <SearchInput />
            <Space>
              <UserOutlined
                onClick={() => router.push("/login")}
                className="text-xl"
              />
            </Space>
            <div className="w-1/3">{renderShoppingCard()}</div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-200 px-6"></div>
      </div>
      <div className="responsive-screen-mobile py-4 lg:hidden flex flex-row justify-between">
        <div>
          <div onClick={() => setOpenNavbarMenu(true)}>
            <MenuOutlined />
          </div>
          <Drawer
            title={<CloseOutlined onClick={() => setOpenNavbarMenu(false)} />}
            placement={"left"}
            closable={false}
            size={"large"}
            onClose={() => setOpenNavbarMenu(false)}
            open={openNavbarMenu}
          >
            <div className="w-full">
              <RegisterButton children={"Đăng nhập"} />
              <Collapse
                expandIcon={({ isActive }) =>
                  isActive ? <MinusOutlined /> : <PlusOutlined />
                }
                defaultActiveKey={["1"]}
                ghost
                items={collapseItems}
              />
            </div>
          </Drawer>
        </div>
        {renderLogo()}
        {renderShoppingCard()}
      </div>
    </div>
  );
};

export default Navigate;
