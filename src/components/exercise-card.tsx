import { Plus } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

interface ExerciseCardProps {
  exercise: string,
  muscle: string,
  onAddExercise: (exercise: { muscle: string; exercise: string }) => void;
}

export function ExerciseCard({ muscle, exercise, onAddExercise }: ExerciseCardProps) {
  const handleClick = () => {
    onAddExercise({ muscle, exercise });
  };

  return (
    <div onClick={handleClick} className="flex border p-2 items-center gap-1 cursor-pointer hover:bg-muted-foreground/10">
      <Plus size={20} />
      <Avatar>
        <AvatarImage src="https://github.com/GaSoler.png" alt="@gasoler" />
        <AvatarFallback>GS</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-between">
        <p className="text-sm">{exercise}</p>
        <p className="text-xs text-muted-foreground">{muscle}</p>
      </div>
    </div>
  )
}