import Link from "next/link";
import React from "react";

const AllServicesCTO = () => {
  return (
    <div className="py-16 px-8 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">
        Ready to Transform Your Business?
      </h2>
      <p className="text-2xl mb-8">
        Get in touch with us to start building solutions that will help your
        business grow.
      </p>
      <Link
        href="/contact"
        className="px-4 py-2 no-underline bg-primaryText hover:bg-primaryText-hover text-white font-bold text-lg rounded-lg shadow-lg  transition"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default AllServicesCTO;
