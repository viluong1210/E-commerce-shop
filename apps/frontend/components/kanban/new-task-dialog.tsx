"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";

import { createCategorys, editCategorys } from "@/services/categoryService";
import { useRouter } from "next/navigation";

type Props = {
  data?: {
    id: string;
    name: string;
  };
  label?: string;
};

export default function NewTaskDialog({ data, label }: Props) {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const { name } = Object.fromEntries(formData);

    if (!data) {
      createCategorys({ name })
        .then(() => {
          router.refresh();
          toast.success("Create categorys successfuly");
        })
        .catch((err) => {
          toast.error(err?.response.data.message);
        });
    } else {
      editCategorys({
        params: {
          name,
        },
        id: data.id,
      })
        .then(() => {
          router.refresh();
          toast.success("Edit categorys successfuly");
        })
        .catch((err) => {
          toast.error(err?.response.data.message);
        });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm">
          {label ? label : "＋ Add New Categorys"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> {label ? label : "Add New"} Categorys</DialogTitle>
        </DialogHeader>
        <form
          id="todo-form"
          className="grid gap-4 py-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="name"
              name="name"
              defaultValue={data?.name}
              // value={data?.name}
              placeholder="Categorys Name..."
              className="col-span-4"
            />
          </div>
        </form>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button type="submit" size="sm" form="todo-form">
              {label ? label : "Add"} Categorys
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
