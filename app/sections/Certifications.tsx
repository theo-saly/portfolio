export default function Certifications() {
return (
<>
    <section className="bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border-1 border-bordercolor m-[2vw] md:m-[1.5vw] xl:m-[1vw]">
        <h2 className="text-xl nohemi font-medium">Licences et certifications</h2>
        <div className="flex flex-col gap-4">
            <div className="flex gap-10 mt-4">
                <div>
                    <p className="text-lightgray text-sm">2025</p>
                </div>
                <div>
                    <h3 className="text-sm">Opquast</h3>
                    <p className="text-lightgray text-sm">Maîtrise règles et langage qualité web.</p>
                </div>
            </div>
            <hr className="text-border"/>
            <div className="flex gap-10">
                <div>
                    <p className="text-lightgray text-sm">2024</p>
                </div>
                <div>
                    <h3 className="text-sm">SecNum</h3>
                    <p className="text-lightgray text-sm">Cybersécurité, authentification, Internet, poste.</p>
                </div>
            </div>
            <hr className="text-border"/>
            <div className="flex gap-10">
                <div>
                    <p className="text-lightgray text-sm">2023</p>
                </div>
                <div>
                    <h3 className="text-sm">Permis de conduire</h3>
                    <p className="text-lightgray text-sm">Permis B</p>
                </div>
            </div>
        </div>
    </section>
</>
);
}