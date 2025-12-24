import { FaGithub } from "react-icons/fa6";
import GithubCalendar from "../Calendar/GithubCalendar";

export default function Git() {
return (
<>
    <section className="grayscale hover:grayscale-0 focus:grayscale-0 active:grayscale-0 transition duration-300 pointer-events-auto bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border-1 border-bordercolor m-[2vw] md:m-[1.5vw] xl:m-[1vw]">
        <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl nohemi font-medium">Github contributions</h2>
            <a href="https://github.com/theo-saly" target="_bank"
                className="rounded-full border border-bordercolor p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto"
                aria-label="Envoyer un email">
                <FaGithub/>
            </a>
        </div>
        <GithubCalendar/>
    </section>
</>
);
}