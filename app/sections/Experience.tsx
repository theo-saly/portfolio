export default function Experience() {
return (
<>
    <section className="md:min-h-76 xl:min-h-84 bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border-1 border-bordercolor m-[2vw] md:m-[1.5vw] xl:m-[1vw]">
        <h2 className="text-xl nohemi font-medium">Expériences</h2>
        <div className="flex flex-col gap-4">
            <div className="flex gap-10 mt-4">
                <div>
                    <p className="text-lightgray text-xs xl:text-sm">2024 - Auj‎ </p>
                </div>
                <div>
                    <h3 className="text-xs xl:text-sm">‎ ‎ ‎ Développeur - SEW Usocome</h3>
                    <p className="text-lightgray text-xs xl:text-sm">‎ ‎ ‎ Contrat en alternance - Haguenau</p>
                </div>
            </div>
            <hr className="text-border"/>
            <div className="flex gap-10">
                <div>
                    <p className="text-lightgray text-xs xl:text-sm">2024 - Auj‎ </p>
                </div>
                <div>
                    <h3 className="text-xs xl:text-sm">‎ ‎ ‎ Développeur indépendant - Salink</h3>
                    <p className="text-lightgray text-xs xl:text-sm">‎ ‎ ‎ Freelance - Strasbourg</p>
                </div>
            </div>
            <hr className="text-border"/>
            <div className="flex gap-10">
                <div>
                    <p className="text-lightgray text-xs xl:text-sm">2023 - 2025</p>
                </div>
                <div>
                    <h3 className="text-xs xl:text-sm">Conseiller en prêt-à-porter - Levi&apos;s</h3>
                    <p className="text-lightgray text-xs xl:text-sm">CDI - Vendenheim</p>
                </div>
            </div>
            <hr className="text-border"/>
            <div className="flex gap-10">
                <div>
                    <p className="text-lightgray text-xs xl:text-sm">2024 - 2024</p>
                </div>
                <div>
                    <h3 className="text-xs xl:text-sm">Développeur - Marketify</h3>
                    <p className="text-lightgray text-xs xl:text-sm">Stage - Gries</p>
                </div>
            </div>
        </div>
    </section>
</>
);
}