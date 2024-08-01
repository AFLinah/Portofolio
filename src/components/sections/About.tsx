import { about4 } from "../../assets";

const About = () => {
    return (
        <div className="bg-blue-950">
            <div className="container mx-auto ">
                <div className="text-center py-10">
                    <p className="text-white lg:text-5xl md:text-4xl text-2xl">
                        About Digital Consulting
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 justify-center">
                    <div className="p-8 text-white">
                        <div className="lg:text-3xl text-xl mb-5">Who we are</div>
                        <p>
                            At Digital Consulting, we are a team of passionate
                            digital experts dedicated to transforming businesses
                            through innovative digital solutions. Our mission is
                            to empower organizations to thrive in the digital
                            age by providing top-notch consulting services
                            tailored to their unique needs.
                        </p>
                        <div className="lg:text-3xl text-xl my-5">Our vision</div>
                        <p>
                            We envision a world where businesses seamlessly
                            integrate digital technologies to achieve
                            operational excellence and unparalleled customer
                            experiences. We strive to be at the forefront of
                            digital innovation, helping our clients navigate the
                            ever-evolving digital landscape.
                        </p>
                    </div>
                    <div className="p-8">
                        <img src={about4} alt="AboutImage" className="rounded-full"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
