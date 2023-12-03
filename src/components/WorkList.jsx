import { MdAddBusiness } from "react-icons/md";
import { FaChartArea } from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";



async function getData() {
    const res = await fetch(`https://agency.teamrabbil.com/api/WorkList`);
    if (!res.ok) {
        throw new Error("WorkList List Calling Failed!!");
    }
    return res.json();
}



const WorkList = async () => {
    const data = await getData();
    return (
        <div className="pt-60 md:pt-10 bg-[#FFFFFF]">
            <h2 className="text-xl uppercase pl-6 font-medium text-[#20B15A]">Work List</h2>
            <p className="text-2xl pb-5 pl-6 font-bold ">We provide the Perfect Solution to your business growth</p>

            <div className="md:flex ">
                {
                    data.map((item, i) => {


                        return (
                            <div key={i} className="mb-8 w-full lg:w-1/3 px-4 text-align">
                                <span className="relative mb-6 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center rounded-4xl text-black text-2xl
                                 bg-[#D7F5DC] rounded-xl mt-5">
                                    {item.id === 1 && <FaChartArea />}
                                    {item.id === 2 && <MdAddBusiness />}
                                    {item.id === 3 && <PiBagSimpleFill />}
                                </span>
                                <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
                                <p className="text-gray-500 leading-loose">
                                    {item.des}
                                </p>

                                <Link href="" className="flex mt-7">
                                    learn more
                                    <GoArrowRight className="w-6 h-6 pl-1" />
                                </Link>
                            </div>
                        );
                    })
                }
            </div>

        </div>
    );
};

export default WorkList;