import React, { useState } from 'react';

type Props = {};

interface ComponentState {
    name: string;
    age: number;
}

type State = Readonly<ComponentState>;

export class GreetingClass extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: 'Bilbo Baggins',
      age: 25,
    };
  }

  onHandleNameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      name: event.currentTarget.value,
    });
  }

  onHandleAgeChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      age: Number(event.currentTarget.value),
    });
  }

  render() {
    const { name, age } = this.state;
    return (
      <div className="Component__useState">
        <section className="row">
          <span>Name</span>
          <input type="text" value={name} onChange={this.onHandleNameChange} />
        </section>
        <section className="row">
          <span>Age</span>
          <input type="text" value={age} onChange={this.onHandleAgeChange} />
        </section>
      </div>
    );
  }
}

export function Greeting() {
  const [name, setName] = useState('Albus Dumbledore');
  const [age, setAge] = useState(175);

  const handleNameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  }

  const handleAgeChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setAge(Number(event.currentTarget.value));
  }

  return (
    <div className="Component__useState">
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