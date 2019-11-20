import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Box, TextField, Button, FormGroup } from '@material-ui/core';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            user: "",
            pass: "",
        }        
        this.handleChangeUser = this.handleChangeUser.bind(this);        ;
        this.handleChangePass = this.handleChangePass.bind(this);
    }

    handleChangeUser = (event) => { this.setState({ user: event.target.value }) }
    handleChangePass = (event) => { this.setState({ pass: event.target.value }) }
    
    render() {

        return(

            <div>
                <Box display="flex" justifyContent="center" textAlign="center">
                    <Card style={{padding: 50, marginTop: 50}} >
                        <h4>Login</h4>
                        <FormGroup>
                            <div>
                                <TextField 
                                    style={{marginTop: 20}} 
                                    type="text" 
                                    value={this.state.user} 
                                    onChange={this.handleChangeUser}
                                    label="Nome" />
                            </div>
                            <div>
                                <TextField 
                                    style={{marginTop: 20}} 
                                    type="password" 
                                    value={this.state.pass} 
                                    onChange={this.handleChangePass} 
                                    label="Senha" />
                            </div>                            
                            <Link to={`/${this.state.user}`}>
                                <Button
                                    style={{marginTop: 20}} 
                                    variant="contained"
                                    color="primary">Entrar</Button>
                            </Link>
                        </FormGroup> 
                    </Card>                    
                </Box>
            </div>

        );
    }
}

export default Login;