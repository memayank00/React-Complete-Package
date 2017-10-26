import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';
import axios from 'axios';

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
            <Modal.Title id="contained-modal-title">Signup Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           Please Fill Your Information
           <div>
            <form className="form-horizontal">
            

            <div className="col-sm-12">
              <div className="form-group">
                  <input type="text" name="username" className="form-control" placeholder="Username" onChange={(e) => this.change(e)}/>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="form-group">
                  <input type="text" name="email" className="form-control" placeholder="Email" onChange={(e) => this.change(e)}/>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                  <input type="password" name="password" className="form-control" placeholder="Password" onChange={(e) => this.change(e)}/>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                  <input type="number" name="age" className="form-control" placeholder="Age" onChange={(e) => this.change(e)}/>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="form-group">
                  <button onClick={(e) => this.submit(e)}> submit </button>
              </div>
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
  //console.log(e.target.name);
  //console.log(e.target.value);
  //{this.state.username} - {this.state.email} - {this.state.password} - {this.state.age}
  this.setState({[e.target.name]: e.target.value});
  }
  submit(ev){
    ev.preventDefault(); // to prevent close popup

  console.log("state--- "+JSON.stringify(this.state));
  axios.post('http://localhost:3333/api/signup', this.state)
    .then(function (response) {
      console.log('response-- '+JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export default signup;