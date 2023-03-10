import React from "react"
import { Card, CardImg, CardText,CardTitle, CardBody} from "reactstrap"
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa"

const MyCard = ({details})=> {
  return(
    <Card> 
<CardBody className="text-center">
  <img height="150" width="150"
  className="rounded-circle img-thumbnail border-danger" src={details.picture?.large}/>
<CardTitle className="text-danger">
<h1><span className="pr-2">{details.name?.title}</span>
<span className="pr-2">{details.name?.first}</span>
<span>{details.name?.last}</span>
</h1>
</CardTitle>
<CardText>
  <FaMapMarkerAlt/>
  <span>{details.location?.city}</span>
  <p>{details.phone}</p>
  <p>{details.email}</p>
</CardText>
</CardBody>
    </Card>
  );
}
 
export default MyCard;