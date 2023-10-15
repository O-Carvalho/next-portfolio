import Image from "next/image"

export const ProjectCard = () => {
    return (
        <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
            <div className="w-full h-48 overflow-hidden">
                <Image
                    width={380}
                    height={200}
                    src="https://images.unsplash.com/photo-1696537768609-1cf03f53e893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
                    alt=""
                    unoptimized
                    className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
                     />
            </div>

            <div className="flex-1 flex flex-col p-8">
                <strong className="font-medium text-gray-50/90 group-cover:text-emerald-500 transition-all">Nome do Projeto</strong>
                <p className="mt-2 text-gray-400 line-clamp-4">Lorem ipsum dolor sit 
                amet consectetur adipisicing elit. Sapiente reprehenderit dolorum, nemo architecto laboriosam commodi! 
                Similique deserunt veniam quam debitis delectus quis obcaecati, modi, dicta non distinctio dignissimos odio commodi. </p>
                <span className="text-gray-300 text-sm font-medium block mt-auto truncate ">Next.js, Next Auth, Stitches, Radix, TypeScript, Prisma, React Query</span>
            </div>
        </div>
    )
}