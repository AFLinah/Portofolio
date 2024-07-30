import NavBar from "../components/NavBar";
import Hero from "../components/sections/Hero";

const HomePage = () => {
    return (
        <>
            <div className="bg-slate-900">
                <Hero />
                <NavBar />
            </div>
        </>
    );
};

export default HomePage;
