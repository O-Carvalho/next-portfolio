import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCard = () => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image 
                width={420} 
                height={304} 
                src="https://images.unsplash.com/photo-1696537768609-1cf03f53e893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
                alt="thumbnail do projeto"
                className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
                />
            </div>

            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image 
                    width={20}
                    height={20}
                    alt=""
                    src="/images/icons/project-title-icon.svg"
                    />
                    BookWise
                </h3>

                <p className="text-gray-400 my-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque repellendus rem ratione iste 
                    est dolorem eveniet earum, laborum commodi labore veniam deleniti modi omnis incidunt saepe eaque
                    quis reiciendis adipisci quidem culpa reprehenderit! Dicta placeat provident voluptates rem fugiat. 
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px">
                <TechBadge name="Next.js" />
                <TechBadge name="Next.js" />
                <TechBadge name="Next.js" />
                <TechBadge name="Next.js" />
                <TechBadge name="Next.js" />
                </div>

                <Link href="/projects/book-wise">
                    Ver Projeto
                    <HiArrowNarrowRight />
                </Link>

            </div>
        </div>
    )
}