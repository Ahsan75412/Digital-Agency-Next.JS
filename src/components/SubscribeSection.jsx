"use client"

import React from 'react';

const SubscribeSection = () => {
    return (
        <div className="bg-[#FFFFFF] py-24">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Subscribe to get the latest <br /> news about us</h2>
                <p className="text-gray-600 mb-6">Stay up-to-date with our latest news and updates.</p>

                <form className="max-w-md mx-auto">
                    <label htmlFor="email" className="sr-only">
                        Email Address
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-[#F55F1D] text-white px-6 py-2 hover:bg-[#fd7b43] transition duration-300"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubscribeSection;
