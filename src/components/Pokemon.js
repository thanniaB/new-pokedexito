import styled from 'styled-components';
import React, { useState } from 'react';

const PokemonContainer = styled.div`
    color: white;
    margin-top: 15px;
    display: flex;
`

const PokemonImage = styled.div`
    img {
      width: 400px;
    }
`

const PokemonInfo = styled.div`

    font-size: 1.5em;

    h1 {
      font-weight: bold;
      font-size: 2em;
      text-transform: capitalize;
    }

    table {
      width: 100%;
    }

    tr td:first-child {
      font-weight: bold;
    }

    tr td:last-child {
      text-align: right;
    }
`


const Pokemon = ({name, sprite, stats}) => {
    return (
        <PokemonContainer>
          <PokemonImage>
            <img src={sprite} alt="pokemon image"/>
          </PokemonImage>
          <PokemonInfo>
            <h1>{name}</h1>
            <table>
              <tbody>
              {stats.map((result, index) => (
                <tr><td>{stats[index].stat.name}</td><td>{stats[index].base_stat}</td></tr>
              ))}
              </tbody>
            </table>
          </PokemonInfo>
        </PokemonContainer>
    )
}

export default Pokemon
