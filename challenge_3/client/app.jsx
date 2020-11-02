
var Checkout = (props) => {
  return (
    // create a button
    <button onClick = {props.clickCheckout}>Checkout</button>
    // create a click listener
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.clickCheckout = this.clickCheckout.bind(this);
  }

  clickCheckout(event){
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <Checkout clickCheckout = {this.clickCheckout}/>
        {/* <Form1 />
        <Form2 />
        <Form3 />
        <Purchase /> */}
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));


