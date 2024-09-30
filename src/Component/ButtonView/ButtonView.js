import { Button, DivB } from './ButtonView.style'

function ButtonView(props){
    return(
        <DivB> 
            <Button>{props.title}</Button>
        </DivB>
    )
}

export default ButtonView