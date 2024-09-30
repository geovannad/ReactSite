import { WrapperCategory, Text, Icon, DivImage } from "./CardCategory.style";

function CardCategory(props) {
  return (
    <WrapperCategory>
      <DivImage>
        <Icon src={props.photo} alt={props.text} />
      </DivImage>
      <Text>{props.text}</Text>
    </WrapperCategory>
  );
}

export default CardCategory;
