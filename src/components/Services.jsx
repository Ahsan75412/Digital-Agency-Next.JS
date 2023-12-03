// async function getData() {
//     const res = await fetch(`https://agency.teamrabbil.com/api/AllService`);
//     if (!res.ok) {
//         throw new Error("AllService List Calling Fail");
//     }
//     return res.json();
// }





// import React from 'react';

// const Services = async () => {
//     const data = await getData();
//     return (
//         <div>
//             <section className='grid grid-cols-1 md:grid-cols-2'>

//                 {
//                     data.map((item, i) => {
//                         return (
//                             <div key={i.toString()} className="py-20 card w-[550px]">
//                                 <div className="container mx-auto px-4 bg-base-100 shadow-xl">
//                                     <div className="flex flex-wrap items-center -mx-4">
//                                     <div className="mb-12 lg:mb-0 w-full">
//                                             <div className="max-w-md">
//                                                 <h2 className="mb-6 text-xxl lg:text-xl font-bold font-heading">
//                                                     {item['title']}
//                                                 </h2>
//                                                 <div className="mb-6 max-w-sm">
//                                                     <p className="text-gray-500 leading-loose">
//                                                         {item['des']}
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="w-full lg:w-1/2">
//                                             <div className="mb-4 flex flex-wrap items-end">
//                                                 <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
//                                                     <img className="w-full h-32 lg:h-48 object-cover rounded" src={item['image1']} />
//                                                 </div>
//                                                 <div className="w-full lg:w-1/3 px-3">
//                                                     <img className="w-full h-32 object-cover rounded" src={item['image2']} alt="" />
//                                                 </div>
//                                             </div>
//                                             <div className="flex flex-wrap items-start">
//                                                 <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
//                                                     <img className="w-full h-32 object-cover rounded" src={item['image3']} alt="" />
//                                                 </div>
//                                                 <div className="w-full lg:w-2/3 px-3">
//                                                     <img className="w-full h-32 lg:h-48 object-cover rounded" src={item['image4']} alt="" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </section>

//         </div>
//     );
// };

// export default Services;









import React from 'react';

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
        <div className='mt-32 bg-[#FFFFFF]'>
            <h2 className=' text-xl md:text-3xl text-[#20B15A] pl-7'>Our All Services</h2>
            <p className=' text-xl md:text-3xl text-gray-600 pl-7'>We Provide BestWeb design services</p>

            <section className='grid grid-cols-1 md:grid-cols-2 gap-8 '>

                {
                    data.map((item, i) => {
                        return (
                            <div key={i.toString()} className="py-8 md:py-20 card bg-base-100 rounded-md">
                                <div className="container mx-auto px-4 card bg-base-100 shadow-xl pl-5 p-10 align-items-center justify-center">
                                    <div className="">
                                        <div className="mb-8  ">
                                            <div className="max-w-md">
                                                <h2 className="mb-4 text-xl lg:text-xl font-bold font-heading">
                                                    {item['title']}
                                                </h2>
                                                <p className="text-gray-500 leading-loose">
                                                    {item['des']}
                                                </p>
                                            </div>
                                        </div>



                                        <div className="shrink-0 max-w-lg w-full  lg:w-[550px]  ">
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
