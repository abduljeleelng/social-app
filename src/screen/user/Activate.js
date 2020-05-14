import React, { Component } from 'react';
import { activation } from '../../auth';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router-dom';
//import withReactContent from 'sweetalert2-react-content';
//const MySwal = withReactContent(Swal);

export default class Activate extends Component {
    state ={
        redirect :false,
    }

    componentDidMount(){
        const activationCode = this.props.match.params.code;
        activation(activationCode).then(data=>{
            if(data.messages) {
                Swal.fire({
                    title:data.messages,
                    icon: 'success',
                    confirmButtonText: 'Congrat !!',
                    confirmButtonColor: '#3085d6',
                    showLoaderOnConfirm: true,
                    allowOutsideClick:false,
                    preConfirm:()=>{
                        this.setState({redirect:true})
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
                        this.setState({redirect:true});
                    }
                })
            }
        })
    }
    render() {
        const {redirect}=this.state;
        if(redirect) return <Redirect to="/" />
        return (
            <div>
                
            </div>
        )
    }
}
