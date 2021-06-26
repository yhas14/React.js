import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites';
import {COMMENTS} from '../shared/comments';
import {PARTNERS} from '../shared/partners';
import {PROMOTIONS} from '../shared/promotions';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null,  
            partners: PARTNERS,
            comments: COMMENTS,
            promotions: PROMOTIONS
        };
    }

    onCampsiteSelect(campsiteId){
        this.setState({selectedCampsite: campsiteId});
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route  path='/aboutus' render=  {()=> <About partners={this.state.partners}/>} />
                        <Directory campsites={this.state.campsites} onClick={campsiteId  => this.onCampsiteSelect(campsiteId)}/>
                        <CampsiteInfo campsite={this.state.campsites.filter(campsite  => campsite.id === this.state.selectedCampsite)[0]}/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;