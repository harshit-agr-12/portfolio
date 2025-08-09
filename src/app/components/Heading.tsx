
export function Heading({heading} : {
    heading : string
}){
    return<div className="text-3xl mb-5">
        <h1 className="text-black font-mono">{heading}</h1>
    </div>
}
