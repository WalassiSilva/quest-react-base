import './text.css';

const Text = ({color, children}) => {
    return (
        <div className="text">
            <h2>Quest React Base </h2>
            <p style={{ color: color, textTransform: 'uppercase'}}>
                {children}
            </p>
        </div>
    )
}
Text.defaultProps = {
    color: 'black'
}
export default Text;