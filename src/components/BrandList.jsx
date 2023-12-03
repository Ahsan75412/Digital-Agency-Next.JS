
async function getData() {
    const res = await fetch(`https://agency.teamrabbil.com/api/BrandList`);
    if (!res.ok) {
        throw new Error("BrandList Calling Failed!");
    }
    return res.json();
}


const BrandList = async () => {
    const data = await getData();
    return (
        // md:-my-28
        <div className="h-[150px] bg-[#D7F5DC]">
            
        <section className=" bg-[#F8FFF9] p-7">
            <div className="container mx-auto px-4 text-center">
                <div className="flex flex-wrap -mx-2">
                    {
                        data.map((item, i) => {
                            return (
                                <div key={i} className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2">
                                    <div>
                                        <img className="mx-auto h-8" src={item['image']} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
        </div>
    );
};

export default BrandList;