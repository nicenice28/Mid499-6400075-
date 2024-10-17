import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[500px] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h2 className="text-4xl font-bold mb-4 text-center">BEST PLACE TO FIND AND EXPLORE<br />THAT ALL YOU NEED</h2>
        <div className="w-full max-w-3xl flex">
          <input type="text" placeholder="What EX: 6400075 ขจรศักดิ์ วงศ์พิพันธ์" className="flex-grow p-3 rounded-l-md text-gray-800" />
          <input type="text" placeholder="Location EX: Bangkok , Newyork" className="flex-grow p-3 text-gray-800" />
          <button className="bg-red-600 text-white px-8 py-3 rounded-r-md hover:bg-red-700 transition duration-300">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;