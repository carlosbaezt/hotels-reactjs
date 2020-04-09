import Hero from '../Hero';
import React from 'react';

function App() {
    const today = new Date();
    const filters = {
      dateFrom: today, 
      dateTo: new Date(today.valueOf() + 86400000),
      country: '',
      price: 0,
      rooms: 0
    }
  
    return (
      <div>
        <Hero filters={ filters } />
      </div>
    )
}
export default App;