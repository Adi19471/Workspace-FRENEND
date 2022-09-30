import React from 'react';
import { AppBar, Container, ImageList, Toolbar, Typography,ImageListItem,TextField,Button} from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import ImagesData from "./ImagesData.json";

const App = () => {
  return (
    <div>
<AppBar>
<Toolbar>
  <AddAPhotoIcon> </AddAPhotoIcon>
  <Typography variant='h5'>Web Devloper Adi Photography Projects</Typography>
  {/* <Typography variant='h5'>Web Devloper Adi Photography Projects</Typography> */}
 
  </Toolbar>
</AppBar>


<Container style={{textAlign:"center",marginTop:"80px"}}>
  <Typography variant='h6'> Our Latest Versions of Photography</Typography>
  <Typography paragraph >This our Bio -data Images Memoriable photos</Typography>
</Container>


<Container>

  <ImageList rowHeight={170} cols={3}>
    {ImagesData.map(imageobj =>
     <ImageListItem  key={imageobj.id} cols={1}>    
     <img src={imageobj.img}  alt={imageobj.title}  />
     </ImageListItem>
     )}
 

  </ImageList>
</Container>

<br/>

<center>
  
<Container style={{border:"2px solid black",boxShadow:"0px 0px 20px black",width:"600px"}}>
  <Typography variant="h5">Enquery Contact Form</Typography>
  <form>
    <TextField style={{color:"red",width:"500px",margin:"5px"}} type="text" label="Name"  variant="outlined"/> <br/>
    <TextField style={{color:"red",width:"500px",margin:"5px"}} type="email" label="Email"  variant="outlined"/> <br/>
    <TextField style={{color:"red",width:"500px",margin:"5px"}} type="tel" label="Phone"  variant="outlined"/> <br/>
    <TextField style={{color:"red",width:"500px",margin:"5px"}} type="text" label="Address"  variant="outlined"/> <br/>
<Button variant="contained" color='secondary'>Button</Button>
  </form>
</Container>


</center>
    </div>
  )
}

export default App
