import { HeaderS, Logo, NavLinks, SearchCart, Icon, Search  } from './Header.style'
import pesquisa from '../../Assets/pesquisa.png'
import cart from '../../Assets/cart.png'
import coracao from '../../Assets/coracao.png'
function Header(){
    return(
        <HeaderS>
            <Logo>Exclusive</Logo>
         
            <NavLinks> 
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Sign Up</a></li>
            </NavLinks>
            <SearchCart>
                <Search>
                    <input type="text" class="search" placeholder="What are you looking for?"/>
                    <Icon class="icon"><img src={pesquisa} alt="Search"/></Icon>
                </Search>    
                <Icon class="icon"><img src={coracao}alt="Favorites"/></Icon>
            <Icon class="icon"><img src={cart} alt="Cart"/></Icon>
            </SearchCart>
        
        </HeaderS>
    );
}

export default Header