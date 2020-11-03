
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheckout: true,
      showForm1: false,
      showForm2: false,
      showForm3: false,
      showPurchase: false
    }
    this.clickCheckout = this.clickCheckout.bind(this);
    this.submitForm1 = this.submitForm1.bind(this);
    this.submitForm2 = this.submitForm2.bind(this);
    this.submitForm3 = this.submitForm3.bind(this);
    this.clickPurchase = this.clickPurchase.bind(this);
  }

  clickCheckout(event){
    console.log('clicked');
    axios.post('/newUser')
    .then((response) => {
      console.log(response);
      this.setState({
        showCheckout: false,
        showForm1: true
      });
    })
    .catch((err) => {console.log(err);})
  }

  submitForm1(event) {
    event.preventDefault();
    console.log('form 1 clicked');
    this.setState({
      showForm1: false,
      showForm2: true
    })
  }

  submitForm2(event) {
    event.preventDefault();
    console.log('form 2 clicked');
    this.setState({
      showForm2: false,
      showForm3: true
    })
  }

  submitForm3(event) {
    event.preventDefault();
    console.log('form 3 clicked');
    this.setState({
      showForm3: false,
      showPurchase: true
    })
  }

  clickPurchase(event) {
    console.log('purchase clicked');
    this.setState({
      showPurchase: false,
      showCheckout: true
    })
  }

  // componentDidMount() {
  //   // send a get request with axios
  //   axios.get('/users')
  //   .then((data) => {console.log(data)})
  //   .catch((err) => {console.log(err);})
  //   // this.setState({groceries: dummyData})
  // }

  render() {
    return (
      <div>
        {this.state.showCheckout ? <Checkout clickCheckout = {this.clickCheckout}/> : null}
        {this.state.showForm1 ? <Form1 submitForm1 = {this.submitForm1}/> : null}
        {this.state.showForm2 ? <Form2 submitForm2 = {this.submitForm2}/> : null}
        {this.state.showForm3 ? <Form3 submitForm3 = {this.submitForm3}/> : null}
        {this.state.showPurchase ? <Purchase clickPurchase = {this.clickPurchase}/> : null}
      </div>
    );
  }
}

var Checkout = (props) => {
  return (
    // create a button
    <button onClick = {props.clickCheckout}>Checkout</button>
  )
}

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <div>
        <form>
          <label>Name
            <input name = "name" value= {this.state.name}/>
          </label>
          <label>Email
            <input name = "email" value= {this.state.email}/>
          </label>
          <label>Password
            <input name = "password" value= {this.state.password}/>
          </label>
          <button onClick={this.props.submitForm1}>Next</button>
        </form>
      </div>
    )
  }
}

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: '',
      phoneNum: ''
    }
  }
  render() {
    return (
      <div>
        <form>
          <label>Address</label>
          <label>Line 1
            <input name ="line1" value={this.state.line1}/>
          </label>
          <label>Line 2
            <input name ="line2" value={this.state.line2}/>
          </label>
          <label>City
            <input name ="city" value={this.state.city}/>
          </label>
          <label>State
            <input name ="state" value={this.state.state}/>
          </label>
          <label>Zipcode
            <input name ="zipcode" value={this.state.zipcode}/>
          </label>
          <label>Phone Number
            <input name ="phoneNum" value={this.state.phoneNum}/>
          </label>
          <button onClick={this.props.submitForm2}>Next</button>
        </form>
      </div>
    )
  }
}

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNum: '',
      expiry: '',
      cvv: '',
      cardZipcode: ''
    }
  }

  render() {
    return (
      <div>
        <form>
          <label>Credit Card Information</label>
          <label>Card Number
            <input name='cardNum' value={this.state.cardNum}/>
          </label>
          <label>Expiry Date
            <input name='expiry' value={this.state.expiry}/>
          </label>
          <label>CVV
            <input name='cvv' value={this.state.cvv}/>
          </label>
          <label>Zipcode
            <input name='cardZipcode' value={this.state.cardZipcode}/>
          </label>
          <button onClick={this.props.submitForm3}>Next</button>
        </form>
      </div>
    )
  }
}

var Purchase = (props) => {
  return (
    <button onClick = {props.clickPurchase}>Purchase</button>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));


