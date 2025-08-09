import Image from "next/image";

export function ProfileImg({url , name}:{
    url : string,
    name : string
}){
    return <span className="relative flex shrink-0 overflow-hidden rounded-xl size-28" aria-hidden="true"><img className="aspect-square h-full w-full" alt="Harshit Agrawalprofile picture" src="https://avatars.githubusercontent.com/u/151599022?v=4" />
    </span>
}