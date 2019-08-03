import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api'
import '../../assets/styles/Shared.css';
import { Boxtop, Container, Boxmid, Container2, Tit1, Tit2, Tit3, Tit4, BoxGroup } from './styles'

import BoxLeft from '../BoxLeft'

export default function List() {

    const [list, setList] = useState([])
    const [search, setSearch] = useState('');

    useEffect(() => {
        getList()
    }, [])

    async function getList() {
        const response = await api.get('/cars')
        setList(response.data)

    }

    async function handleSearch(event) {
        setSearch(event.target.value.substr(0, 20))
    }



    const filterCars = list.filter(
        (lis) => {
            return lis.title.toLowerCase().indexOf(search.toLowerCase()
            ) !== -1;
        }
    )
    return (
        <Container>
            <BoxLeft />
            <Container2>
                <Boxtop>
                    <form>
                        <input type="text" value={search} onChange={handleSearch} />
                        <button type="submit"  >Cadastrar</button>
                    </form>
                </Boxtop>
                <Boxmid>
                    {filterCars.map(val => (
                        <Link to={`/edit/${val.id}`} key={val.id}>
                            <BoxGroup >
                                <div>
                                    <Tit1>
                                        {val.title}
                                    </Tit1>
                                    <Tit2>
                                        {val.model} • {val.brand} • {val.km} Km
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