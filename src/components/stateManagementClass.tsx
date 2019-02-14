import React from 'react';

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
      name: 'Csavardi Samu',
      age: 21,
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
          <h2>state - Class</h2>
        </section>
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
