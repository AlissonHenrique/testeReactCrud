import styled from 'styled-components' 

import car from  '../../assets/img/car-wireframe.png' 
export const Container = styled.div`
    display: flex;
 
`

export const Boxmid = styled.div`
padding:90px;
width:80%;
background:url('${car}')no-repeat center ;
height:100%;
input[type="text"]{
    height:50px;
    background:transparent;
    border:0;
    border-bottom:1px solid #fff;     
    width:100%;
    color:#fff;
    font-size:20px;
        padding:0 10px;
}
`

export const FormGroup = styled.div`
   display: flex;
   flex-direction: row;

 .input-control{
    flex: 1 1 auto;
    display: block;
    margin-right: 50px;
    margin-bottom:50px;
}


`
export const FormGroup2 = styled.div`
display: flex;
justify-content:space-between;
margin-right: 50px;
.btn{
     font-size:20px;
     padding:15px 30px;
     color:#fff;
     background:transparent;
     border:1px solid #fff;
     border-radius:4px;
     color:#fff;
     text-decoration:none;
     margin-right: 30px;
}
button{
     font-size:20px;
     padding:15px 30px;
     background:#fff;
     cursor: pointer;
     border-radius:4px;
     border:none;


}
`