import Text from '../text/text';
import './texts.css'

const textColor = ['red', 'green', 'blue'];

const Texts = () => {
    return (
        <>
           
           <h2>Quest React Base </h2>

            {textColor.map((color, index) => {
                return (
                    
                    <Text key={index} color={color}>
                        <p>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Paisis, filhis, espiritis santis. Quem num gosta di mé, boa gentis num é.</p>
                    </Text>
                    
                )
            })}
            <Text>
                <p>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Interessantiss quisso pudia ce receita de bolis</p>
            </Text>
        </>
    )
}

export default Texts;