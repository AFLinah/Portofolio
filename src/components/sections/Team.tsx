import data from "../../data/teams.json";
import TeamCard from "../cards/TeamCard";

const Team = () => {
    return (
        <section className="bg-hero-bg bg-no-repeat bg-cover bg-top p-5">
            <div className="flex justify-center items-center min-h-screen ">
                <div className="container max-auto flex flex-wrap justify-center items-center  gap-4 group">
                    {data.map((item) => (
                        <TeamCard
                            key={item.id}
                            summary={item.summary}
                            image={item.image}
                            name={item.name}
                            role={item.role}
                            className="card bg-white/10 duration-500 group-hover:scale-[0.90] hover:!scale-100 cursor-pointer"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
