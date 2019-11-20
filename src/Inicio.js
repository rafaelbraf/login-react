import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBarCustom from './components/AppBar';
import { Button, Box, Card } from '@material-ui/core';

class Inicio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.match.params.user,
        }
    }

    render() {
        return(
            <div>

                <AppBarCustom />

                <Box display="flex" justifyContent="center" textAlign="center">
                    <Card style={{padding: 50, marginTop: 50}}>
                        <h4>Bem-Vindo</h4>
                        <p>{this.state.user}</p>
                        <Link to="/">
                            <Button 
                                style={{marginTop: 20}} 
                                variant="contained" 
                                color="secondary">Sair</Button>
                        </Link>
                    </Card>
                </Box>
                
            </div>
        );
    }
}

export default Inicio;