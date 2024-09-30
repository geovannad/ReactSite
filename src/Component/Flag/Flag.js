import { DivS, RedSquard, Title} from './Flag.style'

function Flag(props){
    return(
        <DivS>
            <RedSquard></RedSquard>
            <Title>{props.title}</Title>
        </DivS>
    );
}

export default Flag