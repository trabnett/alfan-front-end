import React, { Component } from "react";
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';






const Sidebar = () => {
        return(
            <div className="container sidebar">
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="sm">
                        <Typography component="div" className="sidebar">
                            <h3>Menu</h3>
                            <div className="liner">
                                <Link className="link" to="/home">Home</Link><br/>
                                <Link className="link" to="/dashboard">Dashboard</Link>
                            </div>
                        </Typography>
                    </Container>
                </React.Fragment>
            </div>
        )
}

export default Sidebar;