import React from 'react';

const About= (props) => {
  const {  name, roll , series, dept , pass_year , workplace , present_address, permanent_address , email, designation} = props ;
  return(
     
      <div>
   <section className="mw7 center avenir">
  <h2 className="baskerville fw1 ph3 ph0-l">{roll}</h2>
  <article className="bt bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black grow" href="#0">
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img src={`https://robohash.org/${roll}?400x400`}  className="db" alt='robots' title={name} />
        </div>
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f2 fw1 baskerville mt0 lh-title">{name}</h1>
          <div  className="f6 lh-copy mv0">
      
              <h4 className="f4 fw6">{`${series} Series`}</h4>
              <dl className="f6 lh-title mv2">
                <dt className="dib b">Department: </dt>
                <dd className="dib ml0 dark-green f5 b">{dept}</dd>
              </dl>
              <dl className="f6 lh-title mv2">
                <dt className="dib b">Pass Year: </dt>
                <dd className="dib ml0 dark-green f5 b">{pass_year}</dd>
              </dl>
              <dl className="f6 lh-title mv2">
                <dt className="dib b">Workplace: </dt>
                <dd className="dib ml0 dark-green f5 b">{workplace}</dd>
              </dl>
                <dl className="f6 lh-title mv2">
                <dt className="dib b">Designation: </dt>
                <dd className="dib ml0 dark-green f5 b">{designation}</dd>
              </dl>
              <dl className="f6 lh-title mv2">
                <dt className="dib b">Present address: </dt>
                <dd className="dib ml0 dark-green f5 b">{present_address}</dd>
              </dl>
              <dl className="f6 lh-title mv2">
                <dt className="dib b">Permanent address:</dt>
                <dd className="dib ml0 dark-green f5 b">{permanent_address}</dd>
              </dl>
              <dl className="f6 lh-title mv2">
                <dt className="dib b">Email:</dt>
                <dd className="dib ml0 dark-green f5 b">{email}</dd>
              </dl>
             
          </div>
            <hr className="mw3 bb bw1 b--black-10" />
         </div>
      </div>
    </a>
  </article>

  
</section>


<div className="flex items-center justify-center pa4">
  <a href="#0" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
      <svg className="w1" data-icon="chevronLeft" viewBox="0 0 32 32" style={{fill: 'currentcolor'}}>
        <title>chevronLeft icon</title>
        <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
      </svg>
    <span className="pl1">Back</span>
  </a>
 
</div>

    </div>  
     
    );
}
export default About;


