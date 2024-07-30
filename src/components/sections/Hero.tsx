import { rocket } from "../../assets";

const Hero = () => {
    return (
        <section className="bg-hero-bg bg-no-repeat bg-cover bg-top h-screen">
            <div className="flex justify-center pt-[17rem]">
                <div className="flex justify-center items-center w-1/2">
                    <div className="ml-[10rem]">
                        <h1 className="text-5xl font-bold text-white mb-5">
                            DIGITAL CONSULTING
                        </h1>
                        <p className="text-slate-400 font-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatum in dolorum doloribus accusamus!
                            Consectetur facilis maxime illum incidunt vero enim
                            distinctio! Quia velit aut temporibus natus dolore
                            id incidunt ab?
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center w-1/2 animate-animate">
                    <img src={rocket} alt="rocket" width={150} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
