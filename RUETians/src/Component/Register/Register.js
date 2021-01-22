import React from 'react';

class Register extends React.Component {
   constructor(props){
    super(props);
    this.state = {
      email: '' ,
      password: '' ,
      first_name: '' ,
      last_name: '' ,
      series: '' ,
      dept: '' ,
      roll: ''
    }
  }

   onRollChange = (event) => {
    this.setState({roll: event.target.value})
  }
  
  onFirstChange = (event) => {
    this.setState({first_name: event.target.value})
  }

  onLastChange = (event) => {
    this.setState({last_name: event.target.value})
  }

   onSeriesChange = (event) => {
     this.setState({series: event.target.value})
   }

    onDeptChange = (event) => {
     this.setState({dept: event.target.value})
   }

   onEmailChange = (event) => {
     this.setState({email: event.target.value})
   }

   onPasswordChange = (event) => {
     this.setState({password: event.target.value})
   }

      onSubmitSignIn = () => {
     fetch('http://localhost:3000/register' , 
     {
        method: 'post' ,
        headers: {'Content-Type' : 'application/json' } , 
        body : JSON.stringify(
        {
            email: this.state.email , 
            password: this.state.password,
            first_name: this.state.first_name ,
            last_name: this.state.last_name ,
            series: this.state.series ,
            dept: this.state.dept ,
            roll: this.state.roll
        })
     })
        .then(response => response.json())
        .then(user => {
          if (user.id) {
             this.props.loadUser(user)
            this.props.onRouteChange('home') ; 
          }
        })
    
   }

   render() {
 
  return ( 
    <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" >
  <main className="pa4 black-80">
  <div className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">Register</legend>

      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Roll</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
         type="text" 
         name="roll"  
         id="roll" 
         onChange = {this.onRollChange}
         />
      </div>

      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">First Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="First Name"  
        id="First Name"
        onChange = {this.onFirstChange}
       />
      </div>

     <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Last Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="Last Name"  
        id="Last Name"
        onChange = {this.onLastChange}
       />
      </div>

       <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Series</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="Series"  
        id="Series"
        onChange = {this.onSeriesChange}
       />
      </div>

       <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Department</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="Department"  
        id="Department"
        onChange = {this.onDeptChange}
       />
      </div>

      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email" 
        name="email-address" 
        id="email-address" 
        onChange = {this.onEmailChange}
        />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
         type="password" 
         name="password"  
         id="password" 
         onChange = {this.onPasswordChange}
         />
      </div>
    </fieldset>
    <div className="">
      <input
       onClick = { this.onSubmitSignIn}
       className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
       type="submit" 
       value="Register" 
      />
    </div>
   
  </div>
</main>
 </article>
    );

   }
}



export default Register;