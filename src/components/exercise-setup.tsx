
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { EllipsisVertical, Plus, X } from "lucide-react"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Timer } from "./timer"
import { Button } from "./ui/button"
import { SetSetup } from "./set-setup"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu"

interface ConfigureSetProps {
  exercise: string,
  onRemoveExercise: () => void;
}

export function ExerciseSetup({ exercise, onRemoveExercise }: ConfigureSetProps) {
  return (
    <div className="flex flex-col p-5 border rounded-md gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/GaSoler.png" alt="@gasoler" />
            <AvatarFallback>GS</AvatarFallback>
          </Avatar>
          <p>{exercise}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost"><EllipsisVertical /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={onRemoveExercise} className="flex items-center gap-2"><X size={16} /> Remove Exercise</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Label>Note</Label>
          <Textarea placeholder="Add pinned note" />
        </div>
        <div>
          <Label>Rest Timer:</Label>
          <Timer />
        </div>
      </div>

      <SetSetup />

      <Button className="flex items-center gap-2 text-xs"><Plus size={12} /> Add set</Button>
    </div>
  )
}