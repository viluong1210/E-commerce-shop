import React from "react";
import { Input } from "@/components/ui/input";
import NewTaskDialog from "../kanban/new-task-dialog";

type Props = {
  data: {
    id: string;
    name: string;
  };
};

export default function CategogyForm({ data }: Props) {
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
    </div>
  );
}
