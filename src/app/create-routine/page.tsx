'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Dumbbell } from "lucide-react"
import Link from "next/link"
import { ExerciseSetup } from "@/components/exercise-setup"
import { ExerciseLibrary } from "@/components/exercise-library"
import { useState } from "react"

export default function CreateRoutine() {
  const [routineTitle, setRoutineTitle] = useState("");
  const [addedExercises, setAddedExercises] = useState<any[]>([]);

  const handleAddExercise = (exercise: { muscle: string; exercise: string }) => {
    setAddedExercises(prevExercises => [...prevExercises, exercise]);
  };

  const handleRemoveExercise = (index: number) => {
    setAddedExercises(prevExercises => prevExercises.filter((_, i) => i !== index));
  };

  return (
    <div className="flex w-full items-start gap-4 p-10">
      {/* Routine container */}
      <div className="flex flex-col flex-1 gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="routines"><ArrowLeft size={24} /></Link>
            <h1 className="text-2xl">Create Routine</h1>
          </div>
          <Button disabled={!routineTitle || addedExercises.length === 0} variant="default">Save Routine</Button>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <Label>Routine title</Label>
            <Input className="mt-2" placeholder="Workout Routine Title" value={routineTitle} onChange={(e) => setRoutineTitle(e.target.value)} />
          </div>

          {addedExercises.length === 0 ? (
            <div className="border flex flex-col gap-4 items-center py-5 rounded-md">
              <Dumbbell size={52} />
              <h3>No Exercises</h3>
              <span className="text-sm text-muted-foreground">So far, you haven&apos;t added any exercises to this routine.</span>
            </div>
          ) : (
            addedExercises.map((exercise, index) => (
              <ExerciseSetup key={index} exercise={exercise.exercise} onRemoveExercise={() => handleRemoveExercise(index)} />
            ))
          )}
        </div>
      </div>

      {/* Exercises List */}
      <ExerciseLibrary onAddExercise={handleAddExercise} />

    </div>
  )
}