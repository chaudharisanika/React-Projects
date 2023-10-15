import "./Button.css"

export default function Button({clickFunc,name}){
    return <button onClick={clickFunc} className="Button">{name}</button>
}