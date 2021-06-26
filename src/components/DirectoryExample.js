import React,  { Component } from 'react';
import {Card, CardImg, CardImgOverlay,CardTitle,CardBody } from 'reactstrap';

class Directory extends Component {
   
    render(){
        const directory = this.props.campsites.map(campsite => {
            return(
                <div key ={campsite.id} className = "col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(campsite.id)}>
                        <CardImg width="100%" src = {campsite.image} alt = {campsite.name}/>
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                        <CardBody>
                                {campsite.comments.map(comment => <p>{comment.text}</p>)}
                        </CardBody>
                    </Card>
                </div>
            ); 
        });

        // directory = 
                        <React.Fragment>
        //                   <div key="0" className="col-md-5 m-1">    <Card>   <cardImg></cardImg>,  <CardImgOverlay>   <CardTitle></CardTitle>   </CardImgOverlay>   </Card>   </div>,  ]
        //                   <div key="1">    <Card>   <cardImg></cardImg>,  <CardImgOverlay>   <CardTitle></CardTitle>   </CardImgOverlay>   </Card>   </div>
        //                   <div key="2">    <Card>   <cardImg></cardImg>,  <CardImgOverlay>   <CardTitle></CardTitle>   </CardImgOverlay>   </Card>   </div>
        //                   <div key="3">    <Card>   <cardImg></cardImg>,  <CardImgOverlay>   <CardTitle></CardTitle>   </CardImgOverlay>   </Card>   </div>
        //                   <div key="4">    <Card>   <cardImg></cardImg>,  <CardImgOverlay>   <CardTitle></CardTitle>   </CardImgOverlay>   </Card>   </div>
        //             </React.Fragment>.



        console.log(directory);




        return (
            <div className = "container">
                <div className= "row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;