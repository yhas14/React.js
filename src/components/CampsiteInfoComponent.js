import React  from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderCampsite({campsite}){
        return(
            <div className="col-md-5 m-1">
                <Card>
                        <CardImg top src={campsite.image} alt={campsite.name} />
                        <CardBody>
                            <CardTitle>{campsite.name}</CardTitle>
                            <CardText>{campsite.description}</CardText>
                        </CardBody>
                </Card>
            </div>
        );
    }


    function RenderComments({comments}){
        console.log(comments);
        if(comments){
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => 
                        <div key={comment.id}>
                            {comment.text}
                            <p> 
                            --
                            {comment.author}
                            ,
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </p>
                            
                        </div>
                    )
                    }
                </div>
                );  
        }else {
            return <div> Empty</div> 
        }

}
   

    function CampsiteInfo(props){
        let  selectedsites;
        if(props.campsite){
            selectedsites = 
            <div className = "container">
                <div  className="row">
                    <RenderCampsite campsite= {props.campsite}/>
                    <RenderComments comments= {props.campsite.comments}/>
                </div>
            </div>
         }else{
            selectedsites = <div></div>
         }

        return(
            <div>
            {selectedsites}
            </div>
        );
    }



export default CampsiteInfo;