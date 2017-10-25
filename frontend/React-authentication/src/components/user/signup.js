import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';

class signup extends Component {

  constructor() {
    console.log('signup');
    super()
    this.state = {
        username:'',
        email:'',
        password:'',
        age:''
    }
  }

 

  render() {

    const{show,close} = this.props;
   
    return (
     
         
         <div className="modal-container" >
        

        <Modal
          show={show}
          onHide={close}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           Please Fill Your Information
           <div>
            <form className="modal-content">
            <div className="container">
            <span> 
              Username - <input type="text" name="username" onChange={(e) => this.change(e)}/>
              Email - <input type="text" name="email" onChange={(e) => this.change(e)}/>
              Password - <input type="password" name="password" onChange={(e) => this.change(e)}/>
              Age - <input type="number" name="age" onChange={(e) => this.change(e)}/>
                 </span>
              <button onClick={(e) => this.submit(e)}> submit </button> <br /><br /><br />
            </div>
            </form>
           </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
     
    );
  }
  change(e){
  console.log(e.target.name);
  console.log(e.target.value);
  //{this.state.username} - {this.state.email} - {this.state.password} - {this.state.age}
  this.setState({[e.target.name]: e.target.value});
  }
  submit(){
  console.log("state--- "+JSON.stringify(this.state));
  }
}

export default signup;