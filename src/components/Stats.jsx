import { HiOutlineUserGroup } from "react-icons/hi2";
import { SlLike } from "react-icons/sl";
import { IoHappyOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";




async function getData() {
    const res = await fetch(`https://agency.teamrabbil.com/api/StatList`);
    if (!res.ok) {
        throw new Error("StatList Calling Fail");
    }
    return res.json();
}






const Stats = async () => {
    const data = await getData();
    return (
        <div className="bg-[#FFFFFF] grid gap-4 md:grid-cols-3  lg:grid-cols-4 py-12">
            <div className="stats shadow ">
                <div className="stat">
                    <span className="relative mb-6 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center rounded-4xl text-black text-2xl bg-[#D7F5DC] rounded-xl mt-5">
                        <HiOutlineUserGroup className="w-10 h-12 " />
                    </span>
                    <div className="stat-value text-center font-bold text-3xl">{data.followers}</div>
                    <div className="text-xl text-center font-semibold">Followers</div>
                </div>

            </div>

            <div className="stats shadow ml-3">
                <div className="stat">
                    <span className="relative mb-6 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center rounded-4xl text-black text-2xl bg-[#D7F5DC] rounded-xl mt-5">
                        <SlLike className="w-10 h-12" />
                    </span>
                    <div className="stat-value text-center font-bold text-3xl">{data.solved}</div>
                    <div className="text-xl text-center font-semibold">Solved Problems</div>
                </div>

            </div>

            <div className="stats shadow ml-3">
                <div className="stat">
                    <span className="relative mb-6 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center rounded-4xl text-black text-2xl bg-[#D7F5DC] rounded-xl mt-5">
                        <IoHappyOutline className="w-10 h-12" />
                    </span>
                    <div className="stat-value text-center font-bold text-3xl">{data.customers}</div>
                    <div className="text-xl text-center font-semibold">Happy Customers</div>
                </div>

            </div>

            <div className="stats shadow ml-3">
                <div className="stat">
                    <span className="relative mb-6 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center rounded-4xl text-black text-2xl bg-[#D7F5DC] rounded-xl mt-5">
                        <GrProjects className="w-8 h-8" />
                    </span>
                    <div className="stat-value text-center font-bold text-3xl">{data.projects}</div>
                    <div className="text-xl text-center font-semibold">Projects</div>
                </div>

            </div>

        </div>
    );
};

export default Stats;