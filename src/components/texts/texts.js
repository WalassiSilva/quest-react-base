import Text from '../text/text';

const textColor = ['red', 'green', 'blue', 'orange'];

const Texts = () => {
    return (
        <>
            {textColor.map((color, index) => {
                return (
                    <Text hey={index} color={color}>
                        <p>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Paisis, filhis, espiritis santis. Quem num gosta di mé, boa gentis num é.</p>
                    </Text>
                )
            })}
        </>
    )
}

export default Texts;