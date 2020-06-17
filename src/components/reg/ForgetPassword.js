import React,{useState}from 'react';
import {Container, Row, Col,Form,FormGroup,Input,} from 'reactstrap';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
//import withReactContent from 'sweetalert2-react-content';
//const MySwal = withReactContent(Swal);

import {forgotPassword} from '../../auth';


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default function Create() {
    const [values, setValues] = useState({
        email:'',
        loading:false,
        show:false,
        error:'',
        message:'',
    });

    const { email, loading,error, } = values;
  
    const handleChange = name => event => {setValues({ ...values, error:'', [name]: event.target.value });};

    const handleSignup=e=>{
        e.preventDefault();
        setValues({...values, loading:true});
        if(!validateEmail(email)) return setValues({...values,loading:false,error:'Please, enter a valid email address'});
        forgotPassword(email)
        .then(data=>{
            if(data === undefined) return setValues({...values,error:'network interruption',loading:false});
            if(data.errors) return setValues({...values,error:data.errors,loading:false});
            if(data.message) { 
                setValues({...values,loading:false,message:data.messages,show:true});
                Swal.fire({
                    icon: 'success',
                    title: data.message,
                    //footer: '<a href>Having any issue : call 08037358707</a>',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    },
                    //showCancelButton: true,
                    confirmButtonText: 'Good luck !!!',
                    confirmButtonColor: '#3085d6',
                    showLoaderOnConfirm: true,
                   // allowOutsideClick: () => !Swal.isLoading()
                   allowOutsideClick:false,
                   preConfirm:()=>{
                    setValues({...values,email:'',loading:false,});
                    //console.log('redirect')
                }
                })
            }
            if(data.error) {
                setValues({...values,loading:false,message:data.messages,show:true});
                Swal.fire({
                    title:data.error,
                    icon: 'error',
                    allowOutsideClick:false,
                    confirmButtonText: 'best of Luck',
                    confirmButtonColor: '#3085d6',
                    preConfirm:()=>{
                        setValues({...values,email:'',loading:false,});
                        //console.log('redirect')
                    }
                })
            }
        })
    }
    const signupForm = ()=>(
        <Form className="regBox">
        <Row form>
            <Col md={12}>
            <FormGroup>
                <Input onChange={handleChange('email')} value={email} type="email"  placeholder="email" />
            </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={6}>
            <FormGroup>
            {
                loading ? <h6>Loadiing ..</h6> : <Input className="btn btn-success" onClick={handleSignup} type="submit" value="Request .." />
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
                <h2 className='text-success' style={{padding:10}}> Reset Password Request !</h2>
                <hr />
                <p>Please, enter a valid email associated with your account</p>
                <h2 className='text-danger' style={{padding:0}}> {error}</h2>
                {signupForm()}
                <p>Sign in  <Link to="/">click here</Link> </p> 
        
                </Col-6>
                <br />
                <br />
            </Row>
            </Col>
            <br />
                <br />
                <br />                <br />
                <br />
                <br />                <br />
                <br />
                <br />                <br />
                <br />
                <br />
            </Row>
        </Container>
    )
}
