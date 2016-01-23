const React = require('react');
const ModalActions = require('../../actions/modal_actions');
const Store = require('../../stores/redux_store');
const Constants = require('../../constants/constants');

var EnterModal = React.createClass({
  getInitialState: function () {
    return ({
      email: '',
      password: '',
      class: 'hide-enter-modal'
    });
  },
  componentWillMount: function () {
    Store.subscribe(this.change);
  },
  componentWillUnmount: function () {
    // Unsubscribe change from store
  },
  hide: function () {
    Store.dispatch(ModalActions.hideEnterModal());
  },
  change: function () {
    this.setState({
      class: Store.getState().get(Constants.ENTER_MODAL_STATUS)
    })
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
    this.hide();
  },
  cancel: function (e) {
    e.preventDefault();
    console.log('cancel');
    this.hide();
  },
  render: function () {
    return (
      <div className={'enter-modal ' + this.state.class}>
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
                               className='button button-blue transition'
                               onClick={this.signin}/>
          &nbsp;
          <input type='submit' value='Cancel' 
                               className='button button-red transition'
                               onClick={this.cancel}/>
        </form>
      </div>
    );
  }
});

module.exports = EnterModal;