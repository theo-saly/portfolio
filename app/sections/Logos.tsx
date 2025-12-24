import SwiperLogos from '../sliders/SwiperLogos';

export default function Logos() {
return (
<>
    <section className="md:min-h-44 bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 pb-0 rounded-2xl border-1 border-bordercolor m-[2vw] md:m-[1.5vw] xl:m-[1vw]">
        <h2 className="text-xl nohemi font-medium">Ils me font confiance</h2>
        <SwiperLogos/>
    </section>
</>
);
}