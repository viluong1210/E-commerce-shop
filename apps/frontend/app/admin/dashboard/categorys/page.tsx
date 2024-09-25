import BreadCrumb from "@/components/breadcrumb";
import CategogyForm from "@/components/categorys/CategogyForm";
import NewTaskDialog from "@/components/kanban/new-task-dialog";
import { Heading } from "@/components/ui/heading";
import { getAllCategorys } from "@/services/categoryService";

const breadcrumbItems = [
  { title: "Categorys", link: "/admin/dashboard/Categorys" },
];
export default async function page() {
  const categorys = await getAllCategorys();

  return (
    <>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading title={`Categorys`} description="Manage Categorys" />
          <NewTaskDialog />
        </div>

        {categorys?.data.map((i: any, index: number) => {
          return <CategogyForm data={i} key={index} />;
        })}

        {/* <KanbanBoard /> */}
      </div>
    </>
  );
}
