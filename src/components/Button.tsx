import React, { useState } from 'react'

interface ButtonProps {
    text: string | number;
    onInc?: (value:number,setvalue:React.ReactNode) => void;
}

interface Book{
    name: string;
    price: number;
}

// type props = { text: string} // we can use this as well 

// FC - functional Component - means if dont't return jsx it will give error
// const Button = (props:{text: string}) => { // to pass props like this we have to remove React.FC 
// const Button:React.FC<ButtonProps> = (props) => { // Good Way to use props or another way
const Button: React.FC<ButtonProps> = ({ text, onInc }) => { // we can destructure as well like in js

    // const [value, setvalue] = useState(0); // implicit where it found itself the type
    const [value, setvalue] = useState<number>(0); // explicit where we give
    const [book,setBook] = useState<Book>({
        name: 'NCERT', 
        price: 100
    })

    return (
        <>
            <h3>{value}</h3>
            <h4>The Book is {book.name} and price is {book.price}</h4>
            <button style={{ fontSize: 24 }} onClick={()=>onInc(value,setvalue)}>{text}</button>
        </>
    )
}

export default Button