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
  cancel: function (e) {
    e.preventDefault();
    console.log('cancel');
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
                             className='session-input'/>
          <br/><br/>
          <label>Password</label><br/>
          <input type='password' value={this.state.password} 
                             onChange={this.updatePassword} 
                             placeholder='imweakbro'
                             className='session-input'/>
          <br/><br/>
          <input type='submit' value='Sign In' 
                               className='btn btn-blue transition'
                               onClick={this.signin}/>
          &nbsp;
          <input type='submit' value='Cancel' 
                               className='btn btn-red transition'
                               onClick={this.cancel}/>
        </form>
      </div>
    );
  }
});

module.exports = SignIn;