// CarrosselCategory.js
import CardCategory from '../CardCategory/CardCategory'; 
import { DivCarrosel } from './CarroselCategory.style';
import phone from '../../Assets/phone.png';

function CarrosselCategory() {
    return (
        <DivCarrosel>
            <CardCategory text="Phone" photo={phone} />
            <CardCategory text="Phone" photo={phone} />
            <CardCategory text="Phone" photo={phone} />
            <CardCategory text="Phone" photo={phone} />
            <CardCategory text="Phone" photo={phone} />
        </DivCarrosel>
    );
}

export default CarrosselCategory;
