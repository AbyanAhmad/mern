import React, { Component } from "react";

import Header from "parts/header";
import landingPage from 'json/landingPage' ;
import Hero from 'parts/Hero';


export default class LandingPage extends Component {
    render() {
        return(
            <>
            <Header {...this.props}></Header>
            <Hero data={landingPage.hero}/>
            </>
        )
    }
}
