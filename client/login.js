import React, { Component } from 'react'
import {connect} from 'react-redux'

class Login extends Component{
  constructor(){
    super();
    this.state = {
      error: '',
      email: '',
      password: ''
    };
  }
  onSubmit = (ev) => {
    ev.preventDefault();
    console.log(this.state);
  }
  onChange= (ev)=> {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  render(){
    const { error, email, password } = this.state;
    const { onChange, onSubmit } = this;

    return (
      <div className='h100 w100 flex column align-items-center justify-center'>
        <h1>Let's Loggin'!</h1>
        <div className='flex w50'>
          <img src='/loggin.png' />
          <form className='grow1' onSubmit={ onSubmit }>
            <div className='flex column'>
              <div className='flex column m1'>
                <label htmlFor='email'>Email</label>
                <input type='email' value={ email } onChange = { onChange } name='email' className='input' />
              </div>
              <div className='flex column m1'>
                <label htmlFor='email'>Password</label>
                <input type='password' name='password' className='input' value={ password } onChange={ onChange }/>
              </div>
              {
                !!error && 
              <div className='flex column m1'>
                Error!!
              </div>
              }
              <div className='m1'>
                <button type='submit' className='btn bg-blue white p1 rounded'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
}

export default connect(null, mapDispatchToProps)(Login)
