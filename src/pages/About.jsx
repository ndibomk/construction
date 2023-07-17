import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { MDBTypography } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBCardGroup
} from 'mdb-react-ui-kit';

const About = () => {
  return (
    <div className="about-main-page">
      <MDBCard style={{ display: "flex", flexDirection:'column', width: "100%" }}>
      <MDBTypography tag="p" className='mb-0'>
        <abbr title='HyperText Markup Language' style={{color:'red', fontSize:'2rem'}} className='initialism lead mb-0 text-color-danger'>
          About Us
        </abbr>
      </MDBTypography>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            flexWrap:'wrap'
          }}
        >
          <Box className='about-box' sx={{  }}>
            <CardContent sx={{ display:'flex', flexDirection: "column", gap:'2rem' }}>
            <MDBTypography tag='div' style={{fontSize:'2.5rem',fontWeight:'900' ,color:'navy'}} className=''>
            We are the best-in-class products & solutions
      </MDBTypography>
      <MDBTypography tag='div' style={{fontSize:'1.6rem', color:''}} className=''>
      We are attentive to the wishes of the customer, we always comply with set real terms.      </MDBTypography>
              <MDBTypography note noteColor='success'>
              When developing a house project, specialists carefully work out the space, especially attentive to natural lighting. The main distinguishing The price of houses decorated in high-tech style is not the lowest, but they have a lot of positive qualities. Our company offers you quality services for the design.
      </MDBTypography>
            </CardContent>
          </Box>
          <Box>
          <CardMedia
            component="img"
            sx={{ width: "90%", height: "100%",objectFit:'contain' }}
            image="https://wasimmia.github.io/bildhub/img/bg/about-bg.png"
          />
          </Box>
          
        </Card>
        
       
      </MDBCard>
<MDBCard style={{width:'100%'}}>
<div  style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}} >
        <MDBTypography tag="p" className='m-0'>
        <abbr title='HyperText Markup Language' style={{color:'red', textAlign:'center', fontSize:'2rem'}} className='initialism lead mb-0 text-color-danger'>
        EXPLORE THE FEATURES
        </abbr>
      </MDBTypography>


      <MDBCardGroup>
      <MDBCard style={{height:'25rem' ,objectFit:'cover'}}>
        <MDBCardImage style={{height:'18rem' ,objectFit:'cover'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4-yHgMfM0Urd8UI0oPik9rquthn2IKB4Dw&usqp=CAU' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle style={{color:'magenta'}}>INTERIOR DESIGN</MDBCardTitle>
          <MDBCardText>
          Rorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incutey.
          </MDBCardText>
        </MDBCardBody>
       
      </MDBCard>

      <MDBCard style={{height:'25rem' ,objectFit:'cover'}}>
        <MDBCardImage style={{height:'18rem' ,objectFit:'cover'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4nshTSpFx3pFFa1Q1EXezFdn8w9fyJWoqQ&usqp=CAU' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle style={{color:'magenta'}}>CONSTRUCTION</MDBCardTitle>
          <MDBCardText>
          Rorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incutey.          </MDBCardText>
        </MDBCardBody>
       
      </MDBCard>

      <MDBCard style={{height:'25rem' ,objectFit:'cover'}}>
        <MDBCardImage style={{height:'18rem' ,objectFit:'cover'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbIIMuSmZOCev3QNshnAzjqsxM1ZX-m7Z0Fw&usqp=CAU' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle style={{color:'magenta'}}>BUILDING REPAIR</MDBCardTitle>
          <MDBCardText>
          Rorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incutey.n.
          </MDBCardText>
        </MDBCardBody>
        
      </MDBCard>
    </MDBCardGroup>
        </div>
      
</MDBCard>

<div>
  <h2>Meet OUR Experts</h2>
</div>
    </div>
  );
};

export default About;
