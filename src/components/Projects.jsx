
async function getData() {
    const res = await fetch(`https://agency.teamrabbil.com/api/AllProject`);
    if (!res.ok) {
        throw new Error("AllService List Calling Fail");
    }
    return res.json();
}




const Projects = async () => {
    const data = await getData();
    return (
        <div className='mt-40 bg-[#FFFFFF] pb-24 '>
            <h2 className=' text-xl md:text-3xl font-bold text-[#20B15A] pl-10'> All Projects</h2>
            <p className=' text-xl font-bold  md:text-2xl text-gray-600 pl-10 pb-5'>Better Agency/SEO Solution At Your Fingertips</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-10 md:pt-5">
                {
                    data.map((item, i) => {
                        return (
                            <section key={i.toString()} className="">
                                <div className="card bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={item['image']} className="transition-transform transform hover:scale-105" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{item['title']}</h2>

                                    </div>
                                </div>
                            </section>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Projects;