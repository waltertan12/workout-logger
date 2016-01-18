const React = require('react');

var SignIn = React.createClass({
  getInitialState: function () {
    return ({
      email: '',
      password: ''
    });
  },
  updateEmail: function (e) {
    e.preventDefault();
    this.setState({email: e.target.value});
  },
  updatePassword: function (e) {
    e.preventDefault();
    this.setState({password: e.target.value});
  },
  signin: function (e) {
    e.preventDefault();
    console.log('signing in');
  },
  render: function () {
    return (
      <div className='col-md-4 col-md-offset-4'>
        <h1>Sign In</h1>
        <form>
          <label>Email</label><br/>
          <input type='text' value={this.state.email} 
                             onChange={this.updateEmail} 
                             placeholder='huge.jacked.man@hugh.jackman'
                             className='form-control'/>
          <br/><br/>
          <label>Password</label><br/>
          <input type='password' value={this.state.password} 
                             onChange={this.updatePassword} 
                             placeholder='imweakbro'
                             className='form-control'/>
          <br/><br/>
          <input type='submit' value='Sign In' 
                               className='btn btn-default transition'
                               onClick={this.signin}/>
        </form>
      </div>
    );
  }
});

module.exports = SignIn;