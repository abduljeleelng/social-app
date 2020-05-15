import React,{useState}from 'react';
import {Container, Row, Col,Form,FormGroup,Label,Input,} from 'reactstrap';
import Swal from 'sweetalert2';
//import withReactContent from 'sweetalert2-react-content';
//const MySwal = withReactContent(Swal);

import {signup,} from '../../auth';
import {API} from '../../Config';
import { Link } from 'react-router-dom';

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default function Create() {
    const [values, setValues] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        day:'',
        month:'',
        year:'',
        gender:'',
        activated:false,
        loading:false,
        show:false,
        error:'',
        message:'',
    });

    const { firstName,lastName, email, password,day,month,year,gender,loading,error,activated } = values;
  
    const months = ["Select Month","January","February","March","Appril","May","June","July","August","Septmber","Octomber","November","December"];
    const days = ['Select Day',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,];
    const now = new Date().getUTCFullYear();    
    const years = Array(now - (now - 90)).fill('').map((v, idx) => now - idx);
    //const years = [1890,1891,];
    const handleChange = name => event => {setValues({ ...values, error:'', [name]: event.target.value });};
    const getReference = e => {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";
        for( let i=0; i < 10; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };

    const handleSignup=e=>{
        e.preventDefault();
        setValues({...values, loading:true});
        if(!validateEmail(email)) return setValues({...values,loading:false,error:'Please, enter a valid email address'});
        if(day==="" || month==="" || year==="") return setValues({...values,loading:false,error:'Please, fill date of birth correctly'});
        const activationCode = getReference();
        
        signup({firstName,lastName,email,password,day,month,year,gender,activationCode,activated})
        .then(data=>{
            if(data === undefined) return setValues({...values,error:'network interruption',loading:false});
            if(data.errors) return setValues({...values,error:data.errors,loading:false});
            if(data.messages) { 
                setValues({...values,loading:false,message:data.messages,show:true});
                Swal.fire({
                    icon: 'success',
                    title: data.messages,
                    input: 'text',
                    inputValidator: (activationCode) => {
                        if (!activationCode) {
                          return 'Enter activation code !'
                        }
                    },
                    inputPlaceholder: 'Enter Activation Code',
                    footer: '<a href>Having any issue : call 08037358707</a>',
                    inputAttributes: {
                      autocapitalize: 'off',
                      'aria-label': 'Enter your activation code'
                    },
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    },
                    //showCancelButton: true,
                    confirmButtonText: 'Activate',
                    confirmButtonColor: '#3085d6',
                    showLoaderOnConfirm: true,
                    preConfirm: (activationCode) => {
                        return fetch(`${API}/active`,{
                            method: "PUT",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({activationCode})
                         })
                         .then(response => {
                            console.log(JSON.stringify(response))
                            return response.json();
                         })
                         .catch(error => {
                            Swal.showValidationMessage(
                                `Request failed: ${error}`
                            )
                        })  
                    },
                   // allowOutsideClick: () => !Swal.isLoading()
                   allowOutsideClick:false
                  })
                  .then((result) => {
                    const data = result.value;
                    if(data.messages) {
                        Swal.fire({
                            title:data.messages,
                            icon: 'success',
                            confirmButtonText: 'Congrat !!',
                            confirmButtonColor: '#3085d6',
                            showLoaderOnConfirm: true,
                            allowOutsideClick:false,
                            preConfirm:()=>{
                                setValues({...values,email:'',firstName:'',lastName:'',password:'',loading:false,});
                                //console.log('redirect')
                            }
                        })
                    }
                    if(data.error) {
                        Swal.fire({
                            title:data.error,
                            icon: 'error',
                            allowOutsideClick:false,
                            confirmButtonText: 'best of Luck',
                            confirmButtonColor: '#3085d6',
                            preConfirm:()=>{
                                setValues({...values,email:'',firstName:'',lastName:'',password:'',loading:false,});
                                //console.log('redirect')
                            }
                        })
                    }

                })
            }
        })
    }
    const signupForm = ()=>(
        <Form className="regBox">
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Input onChange={handleChange('firstName')} value={firstName}  type="text"  placeholder="First Name" />
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
                <Input onChange={handleChange('lastName')} value={lastName} type="text"  placeholder="Surname " />
            </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={12}>
            <FormGroup>
                <Input onChange={handleChange('email')} value={email} type="email"  placeholder="email" />
            </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={12}>
            <FormGroup>
                <Input onChange={handleChange('password')} value={password} type="password"  placeholder="password " />
            </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={4}>
            <FormGroup>
            <Label for="exampleSelect">Day</Label>
            <Input onChange={handleChange('day')} value={day} type="select" name="select" id="exampleSelect">
                {
                    days.map((day,i)=>(
                        <option key={i} value={i}> {day}</option>
                    ))
                }
            </Input>
            </FormGroup>
            </Col>
            <Col md={4}>
            <FormGroup>
            <Label for="exampleSelect">Month</Label>
            <Input onChange={handleChange('month')} value={month} type="select" name="select" >
                {
                    months.map((month,i)=>(
                        <option key={i} value={i}> {month}</option>
                    ))
                }
            </Input>
            </FormGroup>
            </Col>
            <Col md={4}>
            <FormGroup>
            <Label for="exampleSelect">Year</Label>
            <Input onChange={handleChange('year')} value={year} type="select" name="select">
            <option >Select Year</option>
            {
                years.map((year,i)=>(
                    <option key={i} value={year}> {year}</option>
                ))
            }
            </Input>
            </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={4}>
            <FormGroup>
            <Label for="exampleSelect">Gender</Label>
            <Input onChange={handleChange('gender')} value={gender} type="select">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Custom</option>
            </Input>
            </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={6}>
            <FormGroup>
            {
                loading ? <h6>Loadiing ..</h6> : <Input className="btn btn-success" onClick={handleSignup} type="submit" value="Sign up" />
            }
            </FormGroup>
            </Col>
        </Row>
    </Form>
    )

    return (
        <Container >
            <Row>
            <Col-6>
            </Col-6>
            <Col>
            <Row className="float-right regBox" style={{margin:20,backgroundColor:'#000',padding:20,borderRadius:20,opacity:0.9,boxShadow:1}}>
                <Col-6 md="12" xs="12" xl="12" className="regBox" >
                <h2 className='text-success' style={{padding:10}}> Sign up for new Account !</h2>
                <h2 className='text-danger' style={{padding:0}}> {error}</h2>
                {signupForm()}
                <p>Forget pasword ? <Link to="/user/forget">click here</Link> </p> 
                </Col-6>
            </Row>
            </Col>
            </Row>
        </Container>
    )
}
