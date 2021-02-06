import React from "react";
import { Media,Container,Card} from "react-bootstrap";


const Profile=props=>{

    const loggedInUser=JSON.parse(localStorage.getItem("user"))
    //console.log(loggedInUser);
    let user=loggedInUser[0];
    let name=user.firstName + " " +  user.lastName
    return(
        <Container className='' style={{"padding" : "10px"}}>
            <Card className="bg-primary text-white text-center" style={{"width":"300px","marginLeft":"auto","marginRight":"auto"}}>
  <Card.Header ><strong> User Details </strong></Card.Header>
  <Card.Body>
    <Card.Text>
    <ul className="list-unstyled">
<Media as="li">
<Media.Body>

<p>
 <strong> Name</strong> : {name}
 </p>
</Media.Body>
</Media>

<Media as="li">
<Media.Body>

 <p>
 <strong>Email</strong> : {user.email}
 </p>
</Media.Body>
</Media>

<Media as="li">
<Media.Body>

 <p>
 <strong> Location</strong> : {user.location}
 </p>
</Media.Body>
</Media>

<Media as="li">
<Media.Body>

 <p>
 <strong> Mobile</strong> : {user.mobile}
 </p>
</Media.Body>
</Media>

</ul>
    </Card.Text>
  </Card.Body>

</Card>
        </Container>
    )
}
export default Profile;






