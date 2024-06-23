import BreadCrumb from "@/components/breadcrumb";

import { CommonTable } from "@/components/tables/employee-tables/commonTable";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import { getAllOrder } from "@/services/productsService copy";
import { columns } from "@/components/tables/Orders/columns";

const breadcrumbItems = [
  { title: "Products", link: "/admin/dashboard/products" },
];

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

  const totalProducts = orders?.count || 0;
  const pageCount = Math.ceil(totalProducts / pageLimit);

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading title={`Products (${totalProducts})`} />

          <Link
            href={"/admin/dashboard/products/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />

        <CommonTable
          searchKey="name"
          pageNo={page}
          columns={columns}
          totalUsers={totalProducts}
          data={orders?.data || []}
          pageCount={pageCount}
        />
      </div>
    </>
  );
}
