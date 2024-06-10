import { Input } from "./ui/input";

export function SetSetup() {
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
          <Input className="flex items-center justify-center h-8 w-8 rounded" />
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