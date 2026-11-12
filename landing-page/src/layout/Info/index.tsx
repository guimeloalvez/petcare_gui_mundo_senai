import Button from "../../components/Button";

export default function Info() {
    return (
        <section className="py-20 px-10 bg-[#153229] mx-20 my-40 rounded-3xl flex justify-between items-center">
            <div>

                <p className="text-white font-bold font-size-2xl mb-3.5 max-w-100">
                    Seu pet merece cuidado sem correria
                </p>

                <p className="text-[#ccc] max-w-100">
                    Baixe o PetCare e organize toda a rotina em menos de 2 minutos
                </p>

            </div>


            <Button
                text="Começar agora"
                text_color="text-white"
                fontsize="text-sm"
                background="hidden md:block px-6 py-2.5 rounded-full shadow-xl/30"
                background_color="bg-[#FF6B4A]"
                link="/"
            />


        </section>
    )
}