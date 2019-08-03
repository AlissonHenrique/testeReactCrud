import styled from 'styled-components'
import car from '../../assets/img/car-wireframe.png'
export const Container = styled.div`
display: flex;
 
`
export const Container2 = styled.div`
display: flex;
flex-direction:column;
width:80%;
 
`


export const Boxtop = styled.div`

 background:#1a2433;    
padding:45px 100px;

text-align:center;
 
input[type=text]{
    border-radius:4px;
     
    border: 1px solid #ffffff;
    width:80%;
    margin-right:10px;
    background:transparent;
    padding:16px;
    font-size:18px;
    color:#ffffff;
}
 button{
     font-size:20px;
     padding:15px 30px;
     background:#fff;
     cursor: pointer;
     border-radius:4px;
     border-color:#00091a;
 }
`

export const Boxmid = styled.div`
padding:90px;
background:url('${car}')no-repeat top center;

a{text-decoration:none;}
`

export const Tit1 = styled.p`
font-size:20px;

text-align:left;
color:#fff;
`
export const Tit2 = styled.p`
font-size:16px;

text-align:left;
color:#fff;
`

export const Tit3 = styled.p`
font-size:20px;

text-align:right;
color:#fff;
`
export const Tit4 = styled.p`
font-size:16px;
text-align:right;
color:#fff;

`

export const BoxGroup = styled.div`
display:flex;
line-height:30px;

border-bottom:1px solid #4d5867;
div{
    padding:25px;
    width:50%;
}
&:hover{
    background:rgba(255,255,255,0.2)
}
`