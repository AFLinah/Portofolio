import { angular, node, php, python, react } from "../../assets";

function Skills() {
    const clsResponsive =
        "w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-48 xl:h-48 rounded-full p-5 bg-white";

    const clsImage = "object-contain w-full h-full p-4";

    return (
        <section className="bg-stack-bg bg-no-repeat bg-cover bg-top min-h-screen flex flex-col">
            <div className="text-center py-10">
                <p className="text-white text-6xl">
                    Our engineers help on the following stack.
                </p>
            </div>
            <div className="flex-grow flex justify-center items-center">
                <div className="flex flex-wrap justify-center items-center gap-8 p-4">
                    <div className={clsResponsive}>
                        <img src={python} alt="Python" className={clsImage}/>
                    </div>
                    <div className={clsResponsive}>
                        <img src={angular} alt="Angular" className={clsImage}/>
                    </div>
                    <div className={clsResponsive}>
                        <img src={react} alt="React" className={clsImage}/>
                    </div>
                    <div className={clsResponsive}>
                        <img src={node} alt="Node" className={clsImage}/>
                    </div>
                    <div className={clsResponsive}>
                        <img src={php} alt="Php" className={clsImage}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills; 