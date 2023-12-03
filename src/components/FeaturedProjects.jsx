import Link from "next/link";
import { format } from 'date-fns';

async function getData() {
    const res = await fetch(`https://agency.teamrabbil.com/api/FeaturedProject`);
    if (!res.ok) {
        throw new Error("FeaturedProject Calling Failed");
    }
    return res.json();
}

const FeaturedProjects = async () => {
    const data = await getData();

    return (
        <div className="bg-[#F0FDF4] p-6 lg:py-16">
            <h2 className="text-xl uppercase pl-4 lg:pl-6 font-medium text-[#20B15A]">Featured Projects</h2>
            <p className="text-2xl pb-12 pl-4 lg:pl-6 font-bold ">We provide the Perfect Solution to your business growth</p>

            <section className="flex flex-col lg:flex-row lg:space-x-4">
                <div className="mb-4 lg:mb-0 lg:w-2/3">
                    <Link target="_blank" href="">
                        <img
                            className="h-[300px] lg:h-[531px] w-full mx-auto object-cover rounded-xl transition-transform transform hover:scale-105"
                            src={data[0]['image']}
                            alt=""
                        />
                    </Link>
                    <p className="text-sm mt-2 lg:mt-4">App Design - {format(new Date(data[0]['created_at']), 'MMMM dd, yyyy')}</p>
                    <p className="text-lg font-bold ">{data[0]['title']}</p>
                </div>
                <div className="lg:w-1/3">
                    <div className="flex flex-wrap -mx-2 lg:-mx-2">
                        {data.slice(1, 5).map((item, i) => {
                            const formattedDate = format(new Date(item['created_at']), 'MMMM dd, yyyy');
                            return (
                                <div key={i} className="w-full lg:w-1/2 mb-4 lg:mb-8 px-2 lg:px-2">
                                    <Link target="_blank" href={item['live']}>
                                        <img
                                            className="h-[188px] lg:h-[188px] w-full mx-auto object-cover rounded-xl transition-transform transform hover:scale-105"
                                            src={item['image']}
                                            alt=""
                                        />
                                    </Link>
                                    <p className="text-xs mt-2 lg:mt-4">App Design - {formattedDate}</p>
                                    <p className="text-lg font-bold">{item['title']}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturedProjects;
