const Experience = () => {
    return (
        <section className="resume-2">
            <div className="flex justify-center items-center">
                <h1 className="text-center text-xl text-slate-200 bg-slate-600 w-[8%] rounded-xl">
                    Experiences
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center my-10 gap-y-5">
                {/* Latest Experience */}
                <h5 className="text-xl text-slate-700 font-semibold">
                    Here is a quick summary of my most recent experiences:
                </h5>
                <div className="flex justify-center items-center gap-8 bg-gray-500 p-5 rounded-xl">
                    <div className="text-green-500 font-extrabold text-xl">
                        Upwork
                    </div>
                    <div>
                        <ul>
                            <li className="text-white">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </li>
                            <li className="text-white">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </li>
                            <li className="text-white">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </li>
                        </ul>
                    </div>
                    <div className="text-white font-semibold">
                        {" "}
                        Nov 2021 - Present
                    </div>
                </div>

                {/* Previous Experience */}
                <div className="flex justify-center items-center gap-8 bg-gray-500 p-5 rounded-xl">
                    <div className="text-green-500 font-extrabold text-xl">
                        Upwork
                    </div>
                    <div>
                        <ul>
                            <li className="text-white">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </li>
                            <li className="text-white">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </li>
                            <li className="text-white">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </li>
                        </ul>
                    </div>
                    <div className="text-white font-semibold">
                        {" "}
                        Nov 2021 - Present
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
