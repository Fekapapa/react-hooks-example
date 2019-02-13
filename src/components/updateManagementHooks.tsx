import React, { useState, useEffect } from 'react';

export const Title = () => {
  const [name, setName] = useState('Albus Dumbledore');
  const [age, setAge] = useState(175);

  const title = `${name} | ${age}`;

  useEffect(() => {
    document.title = title;
  },
  //what happens if I delete the next line?
  [title]
  );

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

   const handleNameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  }

  const handleAgeChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setAge(Number(event.currentTarget.value));
  }

  return (
    <div className="Component__useState">
      <section className="row">
        <h2>useEffect - Hook</h2>
      </section>
      <section className="row">
        <span>Name</span>
        <input type="text" value={name} onChange={handleNameChange} />
      </section>
      <section className="row">
        <span>Age</span>
        <input type="text" value={age} onChange={handleAgeChange} />
      </section>
      <section className="row">
        <span>Width</span>
        <input type="text" value={width} disabled />
      </section>
    </div>
  );
}