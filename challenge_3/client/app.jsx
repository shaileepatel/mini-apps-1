
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheckout: true,
      showForm1: false,
      showForm2: false,
      showForm3: false,
      showPurchase: false,
      id: 0,
      purchaseDetails: {}
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
      this.setState({
        showCheckout: false,
        showForm1: true,
        id: response.data
      });
    })
    .catch((err) => {console.log(err);})
  }

  submitForm1(userData) {
    console.log('form 1 clicked');
    userData.id = this.state.id;
    axios.post('/userInfo', userData)
    .then((response) => {
      console.log(response);
      this.setState({
        showForm1: false,
        showForm2: true
      });
    })
    .catch((err) => {console.log(err);})
  }

  submitForm2(addInfo) {
    console.log('form 2 clicked');
    addInfo.id = this.state.id;
    axios.post('/userAddress', addInfo)
    .then((response) => {
      console.log(response);
      this.setState({
        showForm2: false,
        showForm3: true
      });
    })
    .catch((err) => {console.log(err);})
  }

  submitForm3(cardInfo) {
    console.log('form 3 clicked');
    cardInfo.id = this.state.id;
    axios.post('/userCardInfo', cardInfo)
    .then((response) => {
      return axios.get('/users', {
        params : {
          id: this.state.id
        }
      });
    })
    .then((response) => {
      this.setState({
        showForm3: false,
        showPurchase: true,
        purchaseDetails: response.data[0]
      });
    })
    .catch((err) => {console.log(err);})
  }

  clickPurchase(event) {
    console.log('purchase clicked');
    this.setState({
      showPurchase: false,
      showCheckout: true
    })
  }

  render() {
    return (
      <div>
        {this.state.showCheckout ? <Checkout clickCheckout = {this.clickCheckout}/> : null}
        {this.state.showForm1 ? <Form1 submitForm1 = {this.submitForm1}/> : null}
        {this.state.showForm2 ? <Form2 submitForm2 = {this.submitForm2}/> : null}
        {this.state.showForm3 ? <Form3 submitForm3 = {this.submitForm3}/> : null}
        {this.state.showPurchase ? <Purchase clickPurchase = {this.clickPurchase} purchaseDetails = {this.state.purchaseDetails}/> : null}
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
    this.handleType = this.handleType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleType(event) {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitForm1(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <label>Name
            <input name = "name" value= {this.state.name} onChange = {this.handleType}/>
          </label>
          <label>Email
            <input name = "email" value= {this.state.email} onChange = {this.handleType}/>
          </label>
          <label>Password
            <input name = "password" value= {this.state.password} onChange = {this.handleType}/>
          </label>
          <button>Next</button>
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
    this.handleType = this.handleType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleType(event) {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitForm2(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <label>Address</label>
          <label>Line 1
            <input name ="line1" value={this.state.line1} onChange = {this.handleType}/>
          </label>
          <label>Line 2
            <input name ="line2" value={this.state.line2} onChange = {this.handleType}/>
          </label>
          <label>City
            <input name ="city" value={this.state.city} onChange = {this.handleType}/>
          </label>
          <label>State
            <input name ="state" value={this.state.state} onChange = {this.handleType}/>
          </label>
          <label>Zipcode
            <input name ="zipcode" value={this.state.zipcode} onChange = {this.handleType}/>
          </label>
          <label>Phone Number
            <input name ="phoneNum" value={this.state.phoneNum} onChange = {this.handleType}/>
          </label>
          <button>Next</button>
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
    this.handleType = this.handleType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleType(event) {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitForm3(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <label>Credit Card Information</label>
          <label>Card Number
            <input name='cardNum' value={this.state.cardNum} onChange = {this.handleType}/>
          </label>
          <label>Expiry Date
            <input name='expiry' value={this.state.expiry} onChange = {this.handleType}/>
          </label>
          <label>CVV
            <input name='cvv' value={this.state.cvv} onChange = {this.handleType}/>
          </label>
          <label>Zipcode
            <input name='cardZipcode' value={this.state.cardZipcode} onChange = {this.handleType}/>
          </label>
          <button>Next</button>
        </form>
      </div>
    )
  }
}

var Purchase = (props) => {
  return (
    <div>
      <div>Name: {props.purchaseDetails.name}</div>
      <div>Email: {props.purchaseDetails.email}</div>
      <div>Password: *****</div>
      <div>Line 1: {props.purchaseDetails.line1}</div>
      <div>Line 2: {props.purchaseDetails.line2}</div>
      <div>City: {props.purchaseDetails.city}</div>
      <div>State: {props.purchaseDetails.state}</div>
      <div>Zipcode: {props.purchaseDetails.zipcode}</div>
      <div>Phone Number: {props.purchaseDetails.phoneNum}</div>
      <div>Credit Card: {props.purchaseDetails.cardNum}</div>
      <div>Expiry Date: {props.purchaseDetails.expiry}</div>
      <div>CVV: {props.purchaseDetails.cvv}</div>
      <div>Zipcode: {props.purchaseDetails.cardZipcode}</div>
      <button onClick = {props.clickPurchase}>Purchase</button>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));


