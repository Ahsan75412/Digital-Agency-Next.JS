async function getData() {
    const res = await fetch(`https://agency.teamrabbil.com/api/TestimonialList`);
    if (!res.ok) {
        throw new Error("AllService List Calling Failed!!");
    }
    return res.json();
}


const Testimonials = async () => {
    const data = await getData();
    return (
        <div className='mt-40 bg-[#FFFFFF] pb-24 w-screen px-8 md:px-20'>
            <h2 className=' text-xl md:text-3xl font-bold text-[#20B15A] pl-10'>Testimonials</h2>
            <p className=' text-xl font-bold  md:text-2xl text-gray-600 pl-10 pb-5'>Better Agency/SEO Solution At Your Fingertips</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mx-10 md:pt-10">
                {
                    data.map((item, i) => {
                        return (
                            <section key={i.toString()}>
                                <div className="card bg-base-100 shadow-xl mt-10">
                                    <figure className="avatar w-36 rounded-xl mx-auto md:pt-10 ">
                                        <img src={item['image']} className="transition-transform transform hover:scale-105 " />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="text-gray-600">{item['msg']}</h2>
                                        <h2 className="card-title">{item['name']}</h2>
                                        <h2 className="card-title">{item['designation']}</h2>

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

export default Testimonials;