
async function getData() {
    const res = await fetch(`https://agency.teamrabbil.com/api/AllService`);
    if (!res.ok) {
        throw new Error("AllService List Calling Fail");
    }
    return res.json();
}







const Services = async () => {
    const data = await getData();
    return (
        <div className='mt-32 bg-[#FFFFFF] '>
            <h2 className='font-bold text-xl md:text-2xl text-[#20B15A] pl-10'>Our All Services</h2>
            <p className='font-semibold text-xl md:text-xl text-gray-600 pl-10'>We Provide BestWeb design services</p>

            <section className='grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-10 md:pt-5'>

                {
                    data.map((item, i) => {
                        return (
                            <div key={i.toString()} className="py-8 md:py-10 card bg-base-100 rounded-md">
                                <div className="container mx-auto card bg-base-100 shadow-xl p-10 ">
                                    <div className="align-items-center justify-center mx-auto">
                                        <div className="mb-8">
                                            <div className="max-w-md">
                                                <h2 className="mb-4 text-xl lg:text-xl font-bold font-heading">
                                                    {item['title']}
                                                </h2>
                                                <p className="text-gray-500 leading-loose">
                                                    {item['des']}
                                                </p>
                                            </div>
                                        </div>



                                        <div className="shrink-0 max-w-lg w-full   ">
                                            <div className="flex lg:flex-row">
                                                <div>
                                                    <img
                                                        className='w-[408px] h-[271px] px-3 rounded-xl '
                                                        src={item['image1']} 
                                                        alt="hero"

                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        className='w-[180px] h-[271px] rounded-xl '
                                                        src={item['image2']} 
                                                        alt="hero"
                                                    />

                                                </div>


                                            </div>
                                            <div className="flex lg:flex-row pt-5">
                                                <div>
                                                    <img
                                                        className='px-3 w-[246px] h-[174px] rounded-xl'
                                                        src={item['image3']} 
                                                        alt="hero"

                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        className='w-[345px] h-[174px] rounded-xl'
                                                        src={item['image4']} 
                                                        alt="hero"

                                                    />

                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    );
};

export default Services;
