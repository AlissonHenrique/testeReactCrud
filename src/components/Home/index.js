import React from 'react';


import { Boxtop, Container, Boxmid, Container2 } from './styles'

import BoxLeft from '../BoxLeft'

export default function Home() {

  return (
    <Container>
      <BoxLeft />
      <Container2>
        <Boxtop>
          <form>
            <input type="text" />
            <button type="submit"  >Cadastrar</button>
          </form>
        </Boxtop>
        <Boxmid>
          <div>
            <p>Pesquisa de veículos <br /> do <span>Traders Cub</span></p>
          </div>
        </Boxmid>
      </Container2>
    </Container>
  );

}