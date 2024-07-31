import { Hero, NavBar, Team } from "../components/sections";

const HomePage = () => {
    return (
        <>
            <div className="bg-slate-900">
                <NavBar />
                <Hero />
                <Team/>
            </div>
        </>
    );
};

export default HomePage;
