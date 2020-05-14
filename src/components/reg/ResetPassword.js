import React,{useState}from 'react';
import {Container, Row, Col,Form,FormGroup,Label,Input,} from 'reactstrap';
import Swal from 'sweetalert2';
//import withReactContent from 'sweetalert2-react-content';
//const MySwal = withReactContent(Swal);

import {resetPassword} from '../../auth';
import { Redirect } from 'react-router-dom';


export default function Create() {
    const [values, setValues] = useState({
        password:'',
        password2:'',
        loading:false,
        show:false,
        redirect:false,
        error:'',
        message:'',
    });

    const {redirect ,password,password2,loading,error,} = values;
  
    const handleChange = name => event => {setValues({ ...values, error:'', [name]: event.target.value });};

    const handleSignup=e=>{
        e.preventDefault();
        setValues({...values, loading:true});
        if(password !==password2 ) return setValues({...values,loading:false,error:'Password must match'});
        resetPassword(password)
        .then(data=>{
            if(data === undefined) return setValues({...values,error:'network interruption',loading:false});
            //if(data.errors) return setValues({...values,error:data.errors,loading:false});
            if(data.message) { 
                setValues({...values,loading:false,message:data.messages,show:true,email:''});
                Swal.fire({
                    icon: 'success',
                    title: data.message,
                    footer: '<a href>Having any issue : call 08037358707</a>',
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
                    setValues({...values,email:'',redirect:true,loading:false,});
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
                        setValues({...values,email:'',redirect:true,loading:false,});
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
                <Input onChange={handleChange('password')} value={password} type="password"  placeholder="password " />
            </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={12}>
            <FormGroup>
                <Input onChange={handleChange('password2')} value={password2} type="password"  placeholder="password again " />
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

    if(redirect) return <Redirect to="/" /> 

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
                </Col-6>
            </Row>
            </Col>
            </Row>
        </Container>
    )
}
