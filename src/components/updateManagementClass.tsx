import React from 'react';

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
          <h2>update - Class</h2>
        </section>
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