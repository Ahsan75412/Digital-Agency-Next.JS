import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Breadcrumbs from './Breadcrumbs';

async function getData() {
    const res = await fetch(`https://agency.teamrabbil.com/api/TeamList`);
    if (!res.ok) {
        throw new Error("TeamList Calling Failed!!");
    }
    return res.json();
}

const Team = async () => {
    const data = await getData();

    return (
        
        <div>
            <div className="bg-[#FFFFFF] mt-20">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
                        <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl">
                            We are a team of passionate individuals who are passionate about our work.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                    {data.map((item, i) => (
                        <div key={i} className="mb-6">
                            <div className="relative card shadow-xl card-compact bg-base-100 overflow-hidden rounded-lg transition-transform transform hover:scale-105">
                                <img src={item['image']} alt="images" className="w-full h-64 object-cover rounded-t-md transition-transform transform hover:scale-105" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-white text-center p-4">
                                        <div className="flex items-center space-x-2">
                                            <a href={item['facebook']} target="_blank" rel="noopener noreferrer">
                                                <FaFacebook className="text-2xl" />
                                            </a>
                                            <a href={item['twitter']} target="_blank" rel="noopener noreferrer">
                                                <FaTwitter className="text-2xl" />
                                            </a>
                                            <a href={item['instagram']} target="_blank" rel="noopener noreferrer">
                                                <FaInstagram className="text-2xl" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-bold">{item['name']}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
