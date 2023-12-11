// App.js
import React from 'react';
import ProductCatalog from './components/ProductCatalog';

function App() {
  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-semibold mb-4">Product Catalog</h1> */}
      <ProductCatalog />
    </div>
  );
}

export default App;
