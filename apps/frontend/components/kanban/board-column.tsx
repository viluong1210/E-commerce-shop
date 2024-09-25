import { Task } from "@/lib/store";
import { useDndContext, type UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cva } from "class-variance-authority";
import { GripVertical } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardHeader } from "../ui/card";
import { ColumnActions } from "./column-action";

export interface Column {
  id: UniqueIdentifier;
  title: string;
}

export type ColumnType = "Column";

export interface ColumnDragData {
  type: ColumnType;
  column: Column;
}

interface BoardColumnProps {
  column: Column;
  tasks: Task[];
  isOverlay?: boolean;
}

export function BoardColumn({ column, tasks, isOverlay }: BoardColumnProps) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({
      id: column.id,
      data: {
        type: "Column",
        column,
      } satisfies ColumnDragData,
      attributes: {
        roleDescription: `Column: ${column.title}`,
      },
    });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  return (
    <Card ref={setNodeRef} style={style}>
      <CardHeader className="p-4 font-semibold border-b-2 text-left flex flex-row space-between items-center">
        <Button
          variant={"ghost"}
          {...attributes}
          {...listeners}
          className=" p-1 text-primary/50 -ml-2 h-auto cursor-grab relative"
        >
          <span className="sr-only">{`Move column: ${column.title}`}</span>
          <GripVertical />
        </Button>

        <ColumnActions id={column.id} title={column.title} />
      </CardHeader>
    </Card>
  );
}

export function BoardContainer({ children }: { children: React.ReactNode }) {
  const dndContext = useDndContext();

  const variations = cva(
    "overflow-x-auto px-2  pb-4 md:px-0 flex lg:justify-start",
    {
      variants: {
        dragging: {
          default: "snap-x snap-mandatory",
          active: "snap-none",
        },
      },
    },
  );

  return (
    <div
      className={variations({
        dragging: dndContext.active ? "active" : "default",
      })}
    >
      <div className="flex gap-4 items-start flex-row justify-center">
        {children}
      </div>
    </div>
  );
}
