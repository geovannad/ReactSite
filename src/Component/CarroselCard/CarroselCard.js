import { DivCard } from './CarroselCard.style'
import Card from '../Card/Card'
import controle from "../../Assets/controle.png"
function CarroselCard(){
    return(
        <DivCard>
            <Card
            name="HAVIT HV-G92 Gamepad"
            img={controle}
            price={120}
            oldPrice={160}
            rating={1}
            reviews={88}
            discount={"-40%"} />
            <Card
            name="HAVIT HV-G92 Gamepad"
            img={controle}
            price={120}
            oldPrice={160}
            rating={1}
            reviews={88}
            discount={"-40%"} />
            <Card
            name="HAVIT HV-G92 Gamepad"
            img={controle}
            price={120}
            oldPrice={160}
            rating={1}
            reviews={88}
            discount={"-40%"} />
            <Card
            name="HAVIT HV-G92 Gamepad"
            img={controle}
            price={120}
            oldPrice={160}
            rating={1}
            reviews={88}
            discount={"-40%"} />
        </DivCard>
    )
    
}

export default CarroselCard