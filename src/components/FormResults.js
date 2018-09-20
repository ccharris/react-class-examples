import React from 'react';
import styled from 'styled-components';

const MovieList = styled.ul`
  list-style-type: none;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
`
const MovieItem = styled.li`
  background-color: purple;
  padding: 5px;
  text-align: center;
  color: white;
`

const FormResults = ({results}) => {
    const link = 'https://image.tmdb.org/t/p/w300';
    const resultsFormatted = results.map(result =>
        <MovieItem key={result.id}>
            <img src={result.poster_path === null ? 'http://via.placeholder.com/300x300' : `${link}${result.poster_path}`} alt={`${result.title} poster`} className="resultPoster" width={'95%'}/>
            <div>
                <p>{result.title}</p>
                <p>{result.release_date}</p>
            </div>
        </MovieItem>
      );
    return (
        <MovieList id="results">
            {resultsFormatted}
        </MovieList>
    );
}
export default FormResults;