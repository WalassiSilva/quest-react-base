import './button.css';

const showLabel = (label) => {
    alert(`a label de button é: ${label}`);
}

const Button = ({ label }) => {
    return (
        <div className="btn-area">
            <button className="btn"
                onClick={() => showLabel(label)}
            >{label}
            </button>
        </div>

    )
}

Button.defaultProps = {
    label: 'Botão'
}

export default Button;