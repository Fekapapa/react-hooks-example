import React, { useState, useEffect } from 'react';

type Props = {};

interface ComponentState {
    name: string;
    age: number;
    width: number;
}

type State = Readonly<ComponentState>;

export class TitleClass extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: 'Bilbo Baggins',
      age: 25,
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    const { name, age } = this.state;
    document.title = `${name} | ${age}`;
    window.addEventListener('resize', this.onHandleResize);
  }

  componentDidUpdate() {
    const { name, age } = this.state;
    document.title = `${name} | ${age}`;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onHandleResize);
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

  onHandleResize = () => {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { name, age, width } = this.state;

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
        <section className="row">
          <span>Width</span>
          <input type="text" value={width} disabled />
        </section>
      </div>
    );
  }
}

export const Title = () => {
  const [name, setName] = useState('Albus Dumbledore');
  const [age, setAge] = useState(175);

  useEffect(() => {
    document.title = `${name} | ${age}`;
  },
  //what happens if I activate the next line?
  //[name]
  );

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

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
      <section className="row">
        <span>Width</span>
        <input type="text" value={width} disabled />
      </section>
    </div>
  );
}