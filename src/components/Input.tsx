import { useState } from "react";

const Input: React.FC = () => {

    const [value, setvalue] = useState<string | undefined>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setvalue(e.target.value);
    }

    const submitHandle =(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(e);
    }

    return (
        <>
            <h2>{value}</h2>
            <form onSubmit={submitHandle}>
                <input type="text" placeholder="Search" onChange={handleChange} />
                <button type="submit">submit</button>
            </form>
        </>
    )
}

export default Input