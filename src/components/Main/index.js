import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import api from '../../services/api'
import '../../assets/styles/Shared.css';
import {Boxtop,Container,Boxmid, Container2,Tit1,Tit2,Tit3,Tit4,BoxGroup} from './styles'

import BoxLeft from '../BoxLeft'

export default class Main extends Component {
 state={
     list:[]
 }
componentDidMount(){
    this.getList()
}
getList = async()=>{
    const response = await api.get('/cars')
    this.setState({list:response.data})
     
}


    render() {
        return (
            <Container>
                <BoxLeft/>
                <Container2>
                    <Boxtop>
                        <form>
                        <input type="text"/> 
                        <button type="submit" >Cadastrar</button>   
                        </form>
                    </Boxtop>
                    <Boxmid>
                        { this.state.list.map(val =>(
                        <Link to={`/edit/${val.id}`} key={val.id}>
                          <BoxGroup >
                              <div>
                                <Tit1>
                                {val.title}
                                </Tit1>
                               <Tit2>
                               {val.model} • {val.brand} • { val.km} Km
                                </Tit2>
                              </div>
                              <div>
                                <Tit3>
                                        R$ {val.price}
                                </Tit3> 
                                <Tit4>
                                    {val.year}
                                </Tit4> 
                              </div>
                          </BoxGroup>
                          </Link>
                        ))}         
                                
                                        

                                
                    </Boxmid>
                </Container2>
            </Container>
        );
    }
}