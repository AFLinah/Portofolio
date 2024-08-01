const Header = () => {
    return (
        <section className="resume-1">
            <div className="container max-auto flex justify-center items-center mt-10 gap-8 h-1/2">
                <div className="flex justify-center items-center w-full md:w-3/4">
                    <div className="w-1/2">
                        <h1 className="text-5xl">Hi!</h1>
                        <p className="pt-3 line-clamp-6 md:line-clamp-none">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. A delectus incidunt quos fugiat dolor itaque
                            est consectetur eaque quo pariatur reprehenderit
                            doloribus dolore mollitia commodi sunt, aliquid nam
                            neque numquam! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Dolores atque officiis
                            numquam nesciunt, fuga dolorum maiores nostrum
                            ratione ipsum, aliquid minus dicta veniam autem
                            ullam est amet, voluptatum architecto aliquam?
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        className="hidden md:block shadow-image w-1/2 mb-3"
                        src="/src/assets/teams/team1.jpg"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default Header;
