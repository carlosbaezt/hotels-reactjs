import Hero from '../Hero';
import React from 'react';
import Filters from '../Filters';

function App() {
    const today = new Date();
    const filters = {
      dateFrom: today, 
      dateTo: new Date(today.valueOf() + 86400000),
      country: undefined,
      price: undefined,
      rooms: undefined
    }
  
    return (
      <div>
        <Hero filters={ filters } />
        <Filters filters={ filters } />
      </div>
    )
}
export default App;