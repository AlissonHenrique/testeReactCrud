import React, {Component,Fragment} from 'react';
import logo from '../../assets/img/logo-tc.png'
import car from  '../../assets/img/car-wireframe.png'
import '../../assets/styles/Shared.css';
import {Boxleft,Boxtop,Container,Boxmid, Container2} from './styles'

export default class App extends Component {
    render() {
        return (
            <Container>
                <Boxleft>
                    <img src={logo} />
                </Boxleft>
                <Container2>
                    <Boxtop>
                        <form>
                        <input type="text"/> 
                        <button type="submit" >Buscar</button>   
                        </form>
                    </Boxtop>
                    <Boxmid>
                        <img src={car}/>
                    </Boxmid>
                </Container2>
            </Container>
        );
    }
}