export default function Home(){
  return(
    <main className="border-box flex h-screen flex-col items-center m-10">
      <h1 className="text-2xl font-bold">MENS SANA</h1>
      <div className="size-full h-full
        grid grid-cols-2 grid-rows-1 gap-4">

        <div className="grid grid-rows-2 gap-4">
          <div className="border grid grid-cols-2">
            <div className="">Logbook</div>
            <div className="">Notes
            </div>
            
          </div>
          <div className="border">Reminders</div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-12">
          <div className="min-h-100% flex flex-col gap-4">
            <div className="border basis-4/5">Graph 1</div>
            <div className="border basis-1/5">Summary 1</div>
          </div>
          <div className="min-h-100% flex flex-col gap-4">
            <div className="border basis-4/5">Graph 2</div>
            <div className="border basis-1/5">Summary 2</div>
          </div>
          <div className="min-h-100% flex flex-col gap-4">
            <div className="border basis-4/5">Graph 3</div>
            <div className="border basis-1/5">Summary 3</div>
          </div>
        </div>

      </div>
    </main>
  )
}