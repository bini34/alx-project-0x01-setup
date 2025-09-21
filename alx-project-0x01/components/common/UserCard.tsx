import React from "react";

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-2">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">@{username}</p>
      </div>
      <p className="text-gray-600 mb-2">Email: {email}</p>
      <p className="text-gray-600 mb-2">Phone: {phone}</p>
      <p className="text-gray-600 mb-2">Website: {website}</p>
      <div className="text-gray-500 text-sm mb-2">
        <div>Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</div>
      </div>
      <div className="text-gray-500 text-sm">
        <div>Company: {company.name}</div>
        <div className="italic">{company.catchPhrase}</div>
      </div>
    </div>
  );
};

export default UserCard;
