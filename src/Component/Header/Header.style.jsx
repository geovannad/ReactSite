import styled from 'styled-components'

export const HeaderS = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
    padding: 20px 135px 10px 135px ;
`

export const Logo = styled.h1`
    font-weight: bold;
    font-size: 24px;
`

export const NavLinks = styled.ul`
    display: flex;
    list-style: none;

    & li {
        margin: 0px 15px;
    }

    & a {
        text-decoration: none;
        color: black;
        font-weight: 500;
        font-size: 16px;
    }

`

export const SearchCart = styled.div`
    padding: 5px;
    border-radius: 5px;
    margin-right: 10px;   
    display: flex;
`

export const Icon = styled.button`
    background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;

  & img{
    width: 30px;
    height: 30px;
  }
`

export const Search = styled.div`
    display: flex;
    padding: 7px 12px 7px 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    & input{
        border: 0px;
        font-size: 12px;
        background-color: #f5f5f5;
    }
`