import styled from 'styled-components';
import React from 'react'
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import {mobile} from '../responsive'
import Cart from '../pages/Cart';

const Container=styled.div`
height:60px;
${mobile({ height: "50px" })}
`;

const Wrapper=styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
${mobile({ padding: "10px 0px" })}

`;

const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`;

const Input=styled.input`
flex:1;
border:none;
${mobile({ width: "50px" })}

`;

const SearchContainer=styled.div`
border: 0.2px solid lightgray;
flex:1;
display:flex;
align-items:center;
`;


const Center=styled.div`
flex:1;
text-align:center;
font-weight:bold;
font-size:25px;
${mobile({ flex: 2, justifyContent: "center" })}

`;
const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
cursor:pointer;
${mobile({ fontSize: "12px", marginLeft: "10px" })}

`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>

        <SearchContainer>
          <Input/>
          <Search style={{ color: "gray", fontSize: 25 }}/>

        </SearchContainer>

        </Left>
        <Center>Shop Stop</Center>

        <Right onclick={<Cart/>} >
          
            <ShoppingCartOutlined />
          
          
        </Right>

      </Wrapper>
    </Container>
  )
}

export default Navbar