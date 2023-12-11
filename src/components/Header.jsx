import {AppBar, Toolbar, styled} from '@mui/material';
import logo from "./CODE YOUR THOUGHTS.png"
import { Padding } from '@mui/icons-material';

const Container = styled(AppBar)
   ` background: #3D3A3E;
    height: 9vh;`

export default function Header(){

    const imageStyle={
        height:40,
        margin: "0px 10px 0px 0px",
    };
    return(
    
    <Container position="static">
    
        <Toolbar>
           <img src={logo} alt="LOGO" style={imageStyle} />
           <h1> CODE-YOUR-THOUGHTS </h1>
        </Toolbar>
    
    </Container>


    )
}