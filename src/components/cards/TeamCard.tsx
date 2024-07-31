type PropsType = {
    summary: string;
    image: string;
    name: string;
    role: string;
    className?: string
};
const TeamCard = ({ summary, image, name, role, className="" }: PropsType) => {
    return (
        <div className={className}>
            <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden mx-auto">
                    <img
                        className="w-[6rem] h-[6rem] rounded-full object-cover"
                        src={`/src/assets/teams/${image}`}
                        alt=""
                    />
                </div>
                <h5 className="text-2xl md:text-3xl font-medium mt-3 mx-auto text-white">
                    {name}
                </h5>
                <h5 className="mx-auto text-white">{`( ${role} )`}</h5>
                <p className="text-slate-400 text-lg mt-3 line-clamp-4">
                    {summary}
                </p>
                <a
                    href="#"
                    className="text-center bg-blue-400 text-blue-700 py-3 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
                >
                    View more
                </a>
            </div>
        </div>
    );
};

export default TeamCard;
