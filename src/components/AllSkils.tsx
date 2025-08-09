import { SkillCard } from "./SkillCard"


export function AllSkills({skills}:{
    skills : Array<string>
}){return<div className="w-full flex flex-wrap gap-3">
    {skills.map((skill , index) => <SkillCard skill={skill} key={index}/>)}
</div>
}