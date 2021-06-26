import styled from 'styled-components';

const SearchBoxInput = styled.input.attrs(props => ({
  type: "text",
  placeholder: "Search a Pokemon..."
}))`
    height: 50px;
    border-radius: 10px;
    padding: 15px;
    font-size: 1.5em;
    box-shadow: 5px inset;
`


const SearchBox = ({handleKeyPress}) => {
    return (
        <SearchBoxInput onKeyPress={handleKeyPress}></SearchBoxInput>
    )
}

export default SearchBox
