
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Checkout() {


  return (
    <StyledContainer >
      <Title>
        Compra realizada com sucesso
        
      </Title>
        <Img src="https://www.pngall.com/wp-content/uploads/2016/07/Success-PNG-Image.png" alt="" />

        <Button>
          <Link to="/loja" style={{ textDecoration: "none", color: "black"}}>
            COMPRAR NOVAMENTE
          </Link>
        </Button>
    </StyledContainer>
  );
}
export default Checkout;

const StyledContainer = styled.section`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #202327;
`
const Title = styled.p `
    margin-bottom:70px;
    padding-left:30px;
    font-family:'Bebas Neue';
    font-size:3rem;
    color:yellow;
    
`
const Img = styled.img `
width: 250px;
height: 250px;
margin-bottom: 50px;
`
const Button = styled.button `
	box-shadow: 0px 1px 0px 0px #fff6af;
	background:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
	background-color:#ffec64;
	border-radius:6px;
	border:1px solid #ffaa22;
	display:inline-block;
	cursor:pointer;
	color:#333333;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffee66;
  width: 230px;
  height: 40px;
  margin-top:40px;
  margin-bottom: 20px;
  &:hover {
	background:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
	background-color:#ffab23;
}
&:active {
	position:relative;
	top:1px;
}
`
