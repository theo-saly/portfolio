export default function Map() {
return (
<>
    <section className="grayscale hover:grayscale-0 focus:grayscale-0 active:grayscale-0 transition duration-300 pointer-events-auto bg-mediumgray rounded-2xl border-1 border-bordercolor m-[2vw] md:m-[1.5vw] xl:m-[1vw] relative overflow-hidden">
        <a href="https://maps.app.goo.gl/mzCcK8Xv1moz3Bu3A" target="_blank">
            <img className="rounded-2xl h-60 xl:h-100 object-cover w-full" src="/maps/map.jpg" alt="" />
            
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping-custom rounded-full border-2 border-blue-400"
                style={{ width: 40, height: 40 }}></div>
            
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blueapple border-2 border-white"
                style={{ width: 20, height: 20, pointerEvents: "none" }}></div>
            
            <div className="absolute rotate-25 top-1/3 left-[-50px] animate-plane-flight" style={{ pointerEvents: "none" }}>
                <img className="w-7 rotate-45" src="/maps/plane.png" alt="" />
            </div>

            <div className="absolute rotate-25 top-2/4 left-[-50px] animate-plane-flight" style={{ pointerEvents: "none" }}>
                <img className="w-8 rotate-45 opacity-50" src="/maps/shadow-plane.png" alt="" />
            </div>

            <div className="absolute rotate-105 top-0 top-[-100px] left-[-50px] animate-cloud-flight"
                style={{ pointerEvents: "none" }}>
                <img className="w-150 rotate-45 opacity-50" src="/maps/cloud.webp" alt="" />
            </div>
        </a>
    </section>
</>
);
}