import React, { Fragment,useState } from 'react';
import {Container, Row, Col,Form,FormGroup,Label,Input,} from 'reactstrap';
import Swal from 'sweetalert2';

import logo from '../../asset/img/logo.png';
import { signin, authenticate } from '../../auth';
import { Redirect } from 'react-router-dom';

export default function Header() {
    const [values, setValues] = useState({
        email:'',
        password:'',
        loading:false,
        redirect:false,
        show:false,
        error:'',
        message:'',
    });
    const { email,password, loading,redirect } = values;
    const handleChange = name => event => {setValues({ ...values, error:'', [name]: event.target.value });};
    const handleSignIn=e=>{
        e.preventDefault();
        setValues({...values, loading:true});
        if(password==='' || email==='' ) {
            //setValues({...values,loading:false,error:'Password and email'});
            Swal.fire({
                icon: 'error',
                title: 'Please, enter email and password',
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
                setValues({...values,email:'',loading:false,});
                //console.log('redirect')
                }
            })
        }else
        signin({email,password}).then(data=>{
            //return console.log(JSON.stringify(data))
            if(data === undefined || data===null){
                //setValues({...values,loading:false,message:data.messages,show:true});
                return  Swal.fire({
                    title:'network error | internal server error',
                    icon: 'error',
                    allowOutsideClick:false,
                    confirmButtonText: 'Try Again',
                    confirmButtonColor: '#3085d6',
                    preConfirm:()=>{
                        setValues({...values,loading:false,});
                        //console.log('redirect')
                    }
                })
            }
            if(data.error){
                return Swal.fire({
                    title:data.error,
                    icon: 'error',
                    allowOutsideClick:false,
                    confirmButtonText: 'Try Again',
                    confirmButtonColor: '#3085d6',
                    preConfirm:()=>{
                        setValues({...values,email:'',password:'',loading:false,});
                        //console.log('redirect')
                    }
                })
            }
            //return authenticate(data,()=>{ this.setState({user:data.user,redirecTo:true,email:"",password:"",loading:false}); })}
            console.log(JSON.stringify(data))
            return authenticate(data,()=>setValues({...values,email:'',password:'',redirect:true,loading:false}));
        })
    }

    if(redirect) return <Redirect to="/"  />



    return (
        <Fragment>
            <Row className="fixed header" >
                <Container
                >
                    <Row>
                        <Col md="6" xs="6" xl="6" >
                            <div className="text-logo">
                             <img src={logo} alt="logo" height="50"  />  I am a Catholic
                            </div>
                        </Col>
                        <Col md="6" xs="6" xl="6" >
                            <Form>
                                <Row form>
                                    <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email or username</Label>
                                        <Input onChange={handleChange('email')} value={email} type="email"  placeholder="email" />
                                    </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input onChange={handleChange('password')} value={password} type="password"  placeholder="password " />
                                    </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                    <FormGroup>
                                        <Label for="examplePassword"> ' </Label>
                                        {
                                            loading ? <h6>Loadiing ..</h6> : <Input className="btn btn-success" onClick={handleSignIn} type="submit" value="Login In" />
                                        }
                                    </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                </Row>
        </Fragment>
    )
}
