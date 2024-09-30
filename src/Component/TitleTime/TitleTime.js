import { Div, Title, ArrowDiv } from './Title.style' 
import Time from '../Time/Time'
import left from '../../Assets/left.png'
import right from '../../Assets/right.png'

function TitleTime(props){
    if (props.time === "true"){
        return(
            <Div>
                <Title>{props.title}</Title>
                <Time days="12" hours="12" minutes="12" secounds="12" ></Time>
                <ArrowDiv>
                    <img src={left} alt="" />
                    <img src={right} alt="" />
                </ArrowDiv>
            </Div>
        )
    }
    return(
        <Div>
            <Title>{props.title}</Title>
            <ArrowDiv>
                <img src={left} alt="" />
                <img src={right} alt="" />
            </ArrowDiv>
        </Div>
    )
    
}

export default TitleTime