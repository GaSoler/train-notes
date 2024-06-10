'use client'

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { equipment, exercises, muscles } from "@/utils/dataUtils";
import { GenericCombobox } from "./generic-combobox";
import { Input } from "./ui/input";
import { ExerciseCard } from "./exercise-card";
import { useEffect, useState } from "react";
import { CustomExercise } from "./custom-exercise";

interface ExerciseLibraryProps {
  onAddExercise: (exercise: { muscle: string; exercise: string }) => void;
}

export function ExerciseLibrary({ onAddExercise }: ExerciseLibraryProps) {
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredExercises, setFilteredExercises] = useState(exercises);

  useEffect(() => {
    const filtered = exercises.filter((exercise) => {
      return (
        (selectedEquipment === "" || selectedEquipment === "All" || exercise.equipment === selectedEquipment) &&
        (selectedMuscle === "" || selectedMuscle === "All" || exercise.muscle === selectedMuscle) &&
        (searchTerm === "" || exercise.label.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });

    setFilteredExercises(filtered);
  }, [selectedEquipment, selectedMuscle, searchTerm]);

  return (
    <div className="w-[350px] border flex flex-col rounded-md">
      <div className="flex flex-col w-full p-4 gap-3 border-b">
        <div className="flex items-center justify-between">
          <h3>Library</h3>
          <CustomExercise />
        </div>
        <GenericCombobox items={equipment} placeholder="Select equipment..." onChange={setSelectedEquipment} />
        <GenericCombobox items={muscles} placeholder="Select muscle..." onChange={setSelectedMuscle} />
        <Input placeholder="Search Exercises" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      <div className="mt-3 overflow-y-auto max-h-[400px]">
        {filteredExercises.map((exercise) => (
          <ExerciseCard
            key={exercise.value}
            exercise={exercise.label}
            muscle={exercise.muscle}
            onAddExercise={onAddExercise}
          />
        ))}
      </div>
    </div>
  )
}
