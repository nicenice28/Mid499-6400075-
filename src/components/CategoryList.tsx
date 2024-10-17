import React from 'react';
import { MapPin, Hotel, Car, Activity, Store } from 'lucide-react';

const categories = [
  { name: 'Destination', icon: MapPin, listings: 200 },
  { name: 'Hotel', icon: Hotel, listings: 250 },
  { name: 'Automotion', icon: Car, listings: 150 },
  { name: 'Healthcare', icon: Activity, listings: 190 },
  { name: 'Restaurant', icon: Store, listings: 250 },
];

const CategoryList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <div key={category.name} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <category.icon className="w-12 h-12 text-gray-600 mb-2" />
            <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
            <p className="text-sm text-gray-500">{category.listings} listings</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;