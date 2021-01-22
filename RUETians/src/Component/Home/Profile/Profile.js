import React from 'react';

class Profile extends React.Component {
   constructor(props){
    super(props);
    this.state = {
      name: '' ,
      pass_year: '' ,
      workplace: '' ,
      designation: '' ,
      present_address: '' ,
      permanent_address: '' ,
      email: ''
    }
  }

   onNameChange = (event) => {
    this.setState({name: event.target.value})
  }
  
   onYearChange = (event) => {
     this.setState({pass_year: event.target.value})
   }

   onPlaceChange = (event) => {
     this.setState({workplace: event.target.value})
   }

   onDesChange = (event) => {
     this.setState({designation: event.target.value})
   }

    onPresentChange = (event) => {
     this.setState({present_address: event.target.value})
   }

    onPermanentChange = (event) => {
     this.setState({permanent_address: event.target.value})
   }

     onEmailChange = (event) => {
     this.setState({email: event.target.value})
   }



      onSubmitProfile = () => {
     fetch('http://localhost:3000/about' , 
     {
        method: 'post' ,
        headers: {'Content-Type' : 'application/json' } , 
        body : JSON.stringify(
        {
            name: this.state.name ,
            pass_year: this.state.pass_year,
            workplace: this.state.workplace ,
            designation: this.state.designation ,
            present_address: this.state.present_address ,
            permanent_address: this.state.permanent_address ,
            email: this.state.email
        })
     })
        .then(response => response.json())
        .then(user => {
          if (user.id) {
            this.props.onRouteChange('login') ; 
          }
        })
    
   } 

   render() {
   
    return ( 
      <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" >
        <main className="pa4 black-80">
          <div className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
               <legend className="f1 fw6 ph0 mh0">Profile</legend>

                      <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Full Name</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                         type="text" 
                         name="Name"  
                         id="Name" 
                         onChange = {this.onNameChange}
                         />
                      </div>

                      <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Passing year</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        name="PassingYear"  
                        id="PassingYear"
                        onChange = {this.onYearChange}
                       />
                      </div>
                      <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="workplace">Workplace</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        name="Workplace" 
                        id="Workplace" 
                        onChange = {this.onPlaceChange}
                        />
                      </div>
                       <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Designation</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        name="Designation" 
                        id="Designation" 
                        onChange = {this.onDesChange}
                        />
                      </div>
                      <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Present Address</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                         type="text" 
                         name="Present Address"  
                         id="Present Address" 
                         onChange = {this.onPresentChange}
                         />
                      </div>

                      <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Permanent Address</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                         type="text" 
                         name="Permanent Address"  
                         id="Permanent Address" 
                         onChange = {this.onPermanentChange}
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

       </fieldset>
                      <div className="">
                        <input
                         onClick = { this.onSubmitProfile}
                         className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                         type="submit" 
                         value="Submit" 
                        />
                      </div>
    
         </div>
     </main>
  </article>
    );

   }
}



export default Profile;