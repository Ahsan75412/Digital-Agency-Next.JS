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
        <section className="pt-60 md:pt-40 pb-24 md:pb-40  bg-[#FFFFFF] w-screen px-8 md:px-20">

            <h2 className=' text-xl md:text-2xl font-bold text-[#20B15A] pb-4'>Work List</h2>
            <p className=' text-xl font-bold  md:text-xl text-gray-600 pb-16 md:pb-20 '>We provide the Perfect Solution to your business growth</p>

       

            <div className="md:flex  ">
                {
                    data.map((item, i) => {
                        // relative mb-6 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center rounded-4xl text-black text-2xl
                        // bg-[#D7F5DC] rounded-xl mt-5

                        
                        // shadow-xl
                        return (
                            <div key={i} className=" card md:m-5 mt-5 w-full lg:w-1/3 px-4 text-align bg-base-100  p-10">
                                <span className="  mb-6 lg:mb-10 rounded-xl bg-[#D7F5DC] w-16 h-16 flex items-center justify-self-start  ">
                                    {item.id === 1 && <FaChartArea className="h-7 w-10 mx-auto 
                                    md:mx-auto " />}
                                    {item.id === 2 && <MdAddBusiness className="h-7 w-10 mx-auto md:mx-auto" />}
                                    {item.id === 3 && <PiBagSimpleFill className="h-7 w-10 mx-auto md:mx-auto" />}
                                </span>
                                <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
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

        </section>
    );
};

export default WorkList;





