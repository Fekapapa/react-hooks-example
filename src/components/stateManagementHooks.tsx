import React, { useState } from 'react';

export const Greeting = () => {
    const [name, setName] = useState('Harry Potter');
    const [age, setAge] = useState(15);
  
    const handleNameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
      setName(event.currentTarget.value);
    }
  
    const handleAgeChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
      setAge(Number(event.currentTarget.value));
    }
  
    return (
      <div className="Component__useState">
        <section className="row">
          <h2>useState - Hook</h2>
        </section>
        <section className="row">
          <span>Name</span>
          <input type="text" value={name} onChange={handleNameChange} />
        </section>
        <section className="row">
          <span>Age</span>
          <input type="text" value={age} onChange={handleAgeChange} />
        </section>
      </div>
    );
  }