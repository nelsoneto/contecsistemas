import { ArrowUpDown, Download, MonitorDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import anyDeskImg from '../../../public/images/AnyDesk.png'
import teamViewerImg from '../../../public/images/TeamViewer.png'

export function DownloadContents() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10 text-2xl">
        <h1 className="font-alt text-xl xl:text-3xl">Downloads Importantes:</h1>
        <div className="grid gap-8 py-10 sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex h-60 w-auto flex-col gap-4 rounded-lg bg-slate-100 p-4 text-blue-500 shadow-sm shadow-blue-300 outline outline-offset-2">
            <span className="flex justify-center font-alt">Acesso Remoto</span>
            <div className="flex flex-col gap-2 py-4 text-base">
              <span className="flex justify-center rounded-lg hover:bg-slate-200">
                <Link
                  href="downloads/AcessoRemoto.exe"
                  download="AcessoRemoto.exe"
                >
                  <Image
                    src={teamViewerImg}
                    alt="Team Viewer"
                    className="w-36 object-cover p-2"
                  />
                </Link>
              </span>
              <span className="flex justify-center rounded-lg hover:bg-slate-200">
                <Link href="downloads/AnyDesk.exe" download="AnyDesk.exe">
                  <Image
                    src={anyDeskImg}
                    alt="AnyDesk"
                    className="w-36 object-cover p-2"
                  />
                </Link>
              </span>
            </div>
          </div>

          <div className="flex h-60 w-auto flex-col gap-4 rounded-lg bg-slate-100 p-4 text-blue-500 shadow-sm shadow-blue-300 outline outline-offset-2">
            <span className="flex justify-center font-alt">MIDAS 2.21</span>
            <div className="flex flex-col gap-1 text-base">
              <span className="flex justify-between rounded-lg px-5 hover:bg-slate-200">
                <Link
                  href="downloads/midas_221_firebird5_setup.exe"
                  download="midas_221_firebird5_setup.exe"
                  className="flex gap-4 p-2"
                >
                  <MonitorDown className="" />
                  <p className="font-bold text-slate-800">Instalação</p>
                </Link>
              </span>
              <span className="flex justify-between rounded-lg px-5 hover:bg-slate-200">
                <Link
                  href="downloads/midas_221_update.exe"
                  download="midas_221_update.exe"
                  className="flex gap-2 p-2"
                >
                  <ArrowUpDown />
                  <p className="font-bold text-slate-800">Atualização</p>
                </Link>
              </span>
            </div>
          </div>
          <div className="flex h-60 w-auto flex-col gap-4 rounded-lg bg-slate-100 p-4 text-blue-500 shadow-sm shadow-blue-300 outline outline-offset-2">
            <span className="flex justify-center font-alt">Versões</span>
            <div className="flex flex-col gap-1 text-lg">
              <span className="flex justify-between rounded-lg hover:bg-slate-200">
                <Link
                  href="downloads/MIDAS 2.20B2447.zip"
                  download="MIDAS 2.20B2447.zip"
                  className="flex gap-4 p-2"
                >
                  <Download className="" />
                  <p className="text-base font-bold text-slate-800">
                    MIDAS2.20B2447
                  </p>
                </Link>
              </span>
              <span className="flex justify-between rounded-lg hover:bg-slate-200">
                <Link
                  href="downloads/MIDAS 2.20B2446.zip"
                  download="MIDAS 2.20B2446.zip"
                  className="flex gap-4 p-2"
                >
                  <Download className="" />
                  <p className="text-base font-bold text-slate-800">
                    MIDAS2.20B2446
                  </p>
                </Link>
              </span>
              <span className="flex justify-between rounded-lg hover:bg-slate-200">
                <Link
                  href="downloads/MIDAS 2.19R1B2418.zip"
                  download="MIDAS 2.19R1B2418.zip"
                  className="flex gap-2 p-2"
                >
                  <Download />
                  <p className="text-base font-bold text-slate-800">
                    MIDAS2.19R1B2418
                  </p>
                </Link>
              </span>
            </div>
          </div>
          <div className="flex h-60 w-auto flex-col gap-4 rounded-lg bg-slate-100 p-4 text-blue-500 shadow-sm shadow-blue-300 outline outline-offset-2">
            <span className="flex justify-center font-alt">Utilitários</span>
            <div className="flex flex-col gap-1 text-base">
              <span className="flex justify-between rounded-lg hover:bg-slate-200">
                <Link
                  href="downloads/Firebird-2.5.9.27139_0_Win32.exe"
                  download="Firebird-2.5.9.27139_0_Win32.exe"
                  className="flex gap-2 p-2"
                >
                  <Download className="" />
                  <p className="font-bold text-slate-800">Firebird-2.5.9</p>
                </Link>
              </span>
              <span className="flex justify-between rounded-lg hover:bg-slate-200">
                <Link
                  href="downloads/Firebird-5.0.0.1306-0-windows-x64.exe"
                  download="Firebird-5.0.0.1306-0-windows-x64.exe"
                  className="flex gap-2 p-2"
                >
                  <Download />
                  <p className="font-bold text-slate-800">Firebird-5.0.0</p>
                </Link>
              </span>
              <span className="flex justify-between rounded-lg hover:bg-slate-200">
                <Link
                  href="downloads/ifb.exe"
                  download="ifb.exe"
                  className="flex gap-2 p-2"
                >
                  <Download />
                  <p className="font-bold text-slate-800">IFB</p>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
