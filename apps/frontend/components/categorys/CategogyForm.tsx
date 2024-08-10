"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import NewTaskDialog from "../kanban/new-task-dialog";
import { Button } from "@/components/ui/button";
import { deleteCategorys } from "@/services/categoryService";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type Props = {
  data: {
    id: string;
    name: string;
  };
};

export default function CategogyForm({ data }: Props) {
  const router = useRouter();

  const deleteCategory = () => {
    deleteCategorys([data.id])
      .then(() => {
        router.refresh();
        toast.success("Delete categorys successfuly");
      })
      .catch((err) => {
        toast.error(err?.response.data.message);
      });
  };

  return (
    <div className="md:grid md:grid-cols-3 gap-8">
      <Input
        disabled
        value={data.name}
        id="name"
        name="name"
        placeholder="Categorys Name..."
      />
      <NewTaskDialog data={data} label="Edit" />

      {/* <Button
        onClick={deleteCategory}
        style={{ width: 160 }}
        variant="destructive"
        size="sm"
      >
        Delete
      </Button> */}
    </div>
  );
}
