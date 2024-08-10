import BreadCrumb from "@/components/breadcrumb";

import { CommonTable } from "@/components/tables/employee-tables/commonTable";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { columns } from "@/components/tables/Orders/columns";
import { getAllOrder } from "@/services/ordersService";

const breadcrumbItems = [{ title: "Orders", link: "/admin/dashboard/orders" }];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function Page({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const name = searchParams.search || null;
  const apis = [
    getAllOrder({
      limit: pageLimit,
      page,
      name,
    }),
  ];

  const [orders] = await Promise.all(apis);

  const totalOrders = orders?.count || 0;
  const pageCount = Math.ceil(totalOrders / pageLimit);

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading title={`Orders (${totalOrders})`} />
        </div>
        <Separator />

        <CommonTable
          searchKey="name"
          pageNo={page}
          columns={columns}
          totalUsers={totalOrders}
          data={orders?.data || []}
          pageCount={pageCount}
        />
      </div>
    </>
  );
}
