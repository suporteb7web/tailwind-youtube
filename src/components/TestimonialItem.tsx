export const TestimonialItem = () => {
    return (
        <div className="bg-gray-100 p-8 shadow rounded-xl overflow-hidden md:flex md:p-0">
            <img className="w-32 h-32 rounded-full mx-auto md:rounded-none md:w-48 md:h-auto" src="/aluno.jpg" alt="" />
            <div className="pt-6 text-center space-y-4 md:text-left md:p-8">
                <div className="text-lg font-semibold">
                    “Quando comecei o curso, eu não sabia nada de nada, 
                    mas depois de um ano estudando quando tinha tempo, 
                    consegui um emprego de desenvolvedor frontend.”
                </div>
                <div className="font-medium">
                    <div className="text-blue-600 font-bold">Gulini Will</div>
                    <div className="text-gray-500">Aluno B7Web</div>
                </div>
            </div>
        </div>
    );
}