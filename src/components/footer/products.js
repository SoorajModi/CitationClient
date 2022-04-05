import React from 'react';

function Products() {
  return (
    <div>
      <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">Products</h6>
      <p className="mb-4">
        <a href="/chicago" className="text-gray-600">Chicago</a>
      </p>
      <p className="mb-4">
        <a href="/mla" className="text-gray-600">MLA</a>
      </p>
      <p className="mb-4">
        <a href="/apa" className="text-gray-600">APA</a>
      </p>
    </div>
  );
}

export default Products;
