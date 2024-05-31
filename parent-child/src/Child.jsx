import React
    from "react";
const Child = (props) => {
    const { setValue } = props;

    const handleClick = () => {
        setValue('I am updated from child');
    }
    return (
        <>
            <div>
                <div>Child</div>
                <button onClick={handleClick}>Change Parent Value</button>
            </div>
        </>
    )
}

export default Child;