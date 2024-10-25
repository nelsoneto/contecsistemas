import { CounterSetting } from './CounterSetting'

export function Counter() {
  return (
    <div className="grid h-auto w-full grid-cols-1 justify-around gap-10 bg-slate-800 p-32 font-alt text-zinc-200 xl:grid-cols-3">
      <div className="flex w-auto items-center justify-center">
        <div className="flex">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-4xl">
              <CounterSetting from={0} to={500} />
            </div>
            <h1 className="text-2xl text-blue-400">Clientes ativos</h1>
          </div>
        </div>
      </div>

      <div className="flex w-auto items-center justify-center text-center">
        <div className="flex">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-4xl">
              <CounterSetting from={0} to={100} />%
            </div>
            <h1 className="text-2xl text-blue-400">Satisfeitos com Suporte</h1>
          </div>
        </div>
      </div>

      <div className="flex w-auto items-center justify-center text-center">
        <div className="flex">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-4xl">
              + <CounterSetting from={0} to={25} />
            </div>
            <h1 className="text-2xl text-blue-400">Anos de mercado</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
