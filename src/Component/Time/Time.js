import { DottedLine, Box, Container, TimeS } from './Time.style'
import dot from '../../Assets/dot.png'

function Time(props){
    return(
        <Container>
            <Box>
                <p>Days</p>
                <TimeS>{props.days}</TimeS>
            </Box>
            <DottedLine src={dot}></DottedLine>
            <Box>
                <p>Hours</p>
                <TimeS>{props.hours}</TimeS>
            </Box>
            <DottedLine src={dot}></DottedLine>
            <Box>
                <p>Minutes</p>
                <TimeS>{props.minutes}</TimeS>
            </Box>
            <DottedLine src={dot}></DottedLine>
            <Box>
                <p>Secounds</p>
                <TimeS>{props.secounds}</TimeS>
            </Box>
        </Container>
    )
}

export default Time