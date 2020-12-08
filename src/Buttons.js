
function Buttons(props) {
    function handlePlus(){
        props.setCounter(props.counter + 3)
    }
function handleMinus(){
        if (props.counter >0) {
            props.setCounter(props.counter - 2)
        }
}
function handleReset(){
    props.setCounter(0)
}


    return (
        <div className="buttons">
            <button className="btn btn1"
            onClick={handlePlus}
            >Увеличить</button>
            <button className="btn btn2"
            onClick={handleMinus}
            >Уменьшить</button>
            <button className="btn btn3"
            onClick={handleReset}
            >Сбросить</button>
        </div>
    );
}

export default Buttons;