import Link from "next/link";
import BrandList from "./BrandList";



async function getData() {
    const res = await fetch(`https://agency.teamrabbil.com/api/HeroList`);

    if (!res.ok) {
        throw new Error("HeroList Calling Fail");
    }
    return res.json();
}







const Hero = async () => {
    const data = await getData();
    console.log(data.title)
    return (
        <div className="hero w-full min-h-screen bg-[#D7F5DC] lg:pb-52">
            <div className="hero-content max-w-5xl flex-col lg:flex-row ">
                <div className="text-center md:w-[600px] lg:text-left ">
                    <h1 className="text-4xl font-bold">
                        {data.title}
                    </h1>
                    <p className="py-6">
                        {data.description}
                    </p>

                    <Link
                    className='inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200'
                    href=''>Get Started</Link>
                </div>
            
                <div className="shrink-0 max-w-lg w-full  lg:w-[606px] px-4 ">
                    <div className="flex lg:flex-row">
                        <div>
                            <img
                                className='w-[408px] h-[271px] px-3 rounded-xl '
                                src={data.image2}
                                alt="hero"

                            />
                        </div>
                        <div>
                            <img
                                className='w-[180px] h-[271px] rounded-xl '
                                src={data.image1}
                                alt="hero"


                            />

                        </div>


                    </div>
                    <div className="flex lg:flex-row pt-5">
                        <div>
                            <img
                                className='px-3 w-[246px] h-[174px] rounded-xl'
                                src={data.image4}
                                alt="hero"

                            />
                        </div>
                        <div>
                            <img
                                className='w-[345px] h-[174px] rounded-xl'
                                src={data.image3}
                                alt="hero"


                            />

                        </div>


                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;