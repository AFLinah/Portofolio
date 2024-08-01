import { angular, node, php, python, react } from "../../assets";

const Skills = () => {
    const logoWidth = 100;
    return (
        <section className="resume-1">
            <div className="flex justify-center items-center my-5">
                <h1 className="text-center text-xl text-slate-200 bg-slate-600 w-[8%] rounded-xl">
                    Skills
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h5 className="text-xl mt-3">
                    The skills, tools. and technologies I am really good at:
                </h5>
                <div className="flex justify-center items-center mt-3">
                    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 p-4">
                        <div>
                            <img src={python} alt="Python" width={logoWidth} />
                        </div>
                        <div>
                            <img
                                src={angular}
                                alt="Angular"
                                width={logoWidth}
                            />
                        </div>
                        <div>
                            <img src={react} alt="React" width={logoWidth} />
                        </div>
                        <div>
                            <img src={node} alt="Node" width={logoWidth} />
                        </div>
                        <div>
                            <img src={php} alt="Php" width={logoWidth} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
