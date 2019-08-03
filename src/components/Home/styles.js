import styled from 'styled-components'
import car from '../../assets/img/car-wireframe.png'
export const Container = styled.div`
display: flex;
 height:900px;
 
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
padding:90px 0;
background:url('${car}')no-repeat  center;
 height:600px;
display:flex;
justify-content:center;
a{text-decoration:none;}
  
     p{   font-size:80px;  text-align:right;
    line-height:130px;
    span{
        background:rgba(46,73,107,0.6);
        padding:20px;
        
         
    }
 


}
`

