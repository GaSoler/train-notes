"use client"

import { Button } from "@/components/ui/button";
import { ClipboardList, ClipboardPlus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Routines() {
  const router = useRouter()

  function handleNavigateToCreateRoutine() {
    router.push('/create-routine')
  }

  return (
    <div className="flex w-full items-start p-4 justify-start gap-4 mt-5 ">
      <div className="flex flex-col py-5 px-4 gap-3 rounded-md border">
        <h1 className="text-xl">My Routines</h1>
        <Button
          variant="outline"
          className="gap-3 px-12 text-base font-normal"
          onClick={handleNavigateToCreateRoutine}
        >
          <ClipboardList size={20} strokeWidth={1} />
          New Routine
        </Button>
      </div>

      <div className="border flex flex-col items-center justify-center gap-4 w-full h-[50vh]">
        <ClipboardPlus size={40} strokeWidth={1} />
        <h3 className="text-base">Get started</h3>
        <span className="text-sm">Start by creting a routine!</span>
      </div>
    </div>
  )
}