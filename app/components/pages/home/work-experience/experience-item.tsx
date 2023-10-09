import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

export const ExperienceItem = () => {
    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image 
                        src=""
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="Logo da Empresa"                  
                    />
                </div>

                <div className="h-full w-[1px] bg-gray-800"/>
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a 
                    href=""
                    target="_blank"
                    className="text-gray-500 hover:text-emerald-500 transition-colors"
                    >
                        @ PSI Energy
                    </a>
                    <h4 className="text-gray-300">Desenvolvedor Front-End</h4>
                    <span className="text-gray-500">
                        mar 2019 ° O momento ° (4 anos)
                    </span>
                    <p className="text-gray-400">
                        Desenvolvimento e manutenção de websites, planejamento e controle de produção
                    </p>
                </div>
                <p className="text-gray-400 text-sm mb-3 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    <TechBadge name="React" />
                    <TechBadge name="React" />
                    <TechBadge name="React" />
                    <TechBadge name="React" />
                    <TechBadge name="React" />
                    <TechBadge name="React" />
                </div>
            </div>
        </div>
    )
}