export default function Profile() {
return (
<>
    <section className="bg-mediumgray rounded-2xl border border-bordercolor222 backdrop-blur-md relative m-[2vw] md:m-[1.5vw] xl:m-[1vw]">
        <img
            className="h-60 md:h-69 xl:h-100 object-cover rounded-2xl w-full z-10"
            src="profile/profile-transparent.png"
            alt=""
        />
        <img
            className="h-60 md:h-69 xl:h-100 object-cover rounded-2xl w-full absolute top-0 left-0 opacity-70 z-0"
            src="profile/profile.png"
            alt=""
        />
    </section>
</>
);
}