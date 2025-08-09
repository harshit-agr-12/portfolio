
export function SkillCard({skill}:{
    skill : string
}){
    return (<span className=" bg-gray-600 rounded flex items-center justify-center  px-2 ">
        <p className="text-gray-50 font-mono text-center text-sm">{skill}</p>
    </span>)
}