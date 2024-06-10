import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { timers } from "@/utils/dataUtils"

export function Timer() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Off" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="1">Off</SelectItem>
          {timers.map((timer, index) => (
            <SelectItem value={index.toString()} key={timer}>{timer}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}