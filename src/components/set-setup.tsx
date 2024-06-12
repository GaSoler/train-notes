import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { CalendarIcon } from "@radix-ui/react-icons"
import { setDetails } from "@/utils/dataUtils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useState } from "react";

export function SetSetup() {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2803498178.
  const [selectedTypeSet, setSelectedTypeSet] = useState(setDetails[0])

  return (
    <>
      <div className="flex items-center gap-2">
        <div className="flex w-12 justify-center">
          <p className="text-xs">SET</p>
        </div>
        <div className="flex justify-center custom-flex">
          <p>KG</p>
        </div>
        <div className="flex justify-center custom-flex">
          <p>REP RANGE</p>
        </div>
      </div>
      <div className="flex items-center h-12 gap-2 rounded-md border">
        <div className="flex w-12 justify-center">          
          <DropdownMenu>
            <DropdownMenuTrigger>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-center justify-center h-8 w-8 rounded border text-xs">
                    <p>{selectedTypeSet.shorter}</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{selectedTypeSet.name}</h4>
                      <p className="text-sm">
                        {selectedTypeSet.description}
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {setDetails.map((setType) => (
                <DropdownMenuItem
                  key={selectedTypeSet.shorter}
                  onClick={() => setSelectedTypeSet(setType)}  
                  className="flex gap-2 items-center"
                >
                  <div className="flex items-center justify-center rounded border h-6 w-6 text-xs">
                    {setType.shorter}
                  </div>
                  {setType.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex justify-center custom-flex">
          <Input className="max-w-24 min-w-10 h-10 text-center flex items-center justify-center w-full py-3 px-5 rounded-md box-border text-base" />
        </div> 
        <div className="flex justify-center custom-flex">
          <div className="max-w-24 flex">
            <div className="flex items-center gap-1">
              <Input className="max-w-24" />
              <p>-</p>
              <Input className="max-w-24" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}