import { ImagemS, Div } from './Imagem.style'
import  srcImagem  from '../../Assets/imagem1.png'

function Imagem(){
    return (
        <Div>
            <ImagemS src={srcImagem}></ImagemS>;
        </Div>
    )
}

export default Imagem