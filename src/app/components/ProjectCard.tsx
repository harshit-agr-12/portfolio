"use client";
import { ReactElement } from "react";
import {motion } from "motion/react";
import Tilt from "react-parallax-tilt";


export function ProjectCard({title , about , logo , skills}:{
    title : string,
    about : string,
    logo ?: ReactElement,
    skills : Array<string>,
}){return (
    <a href="https://github.com/harshit-agr-12/Second-Brain-app" target="_blank" rel="noopener noreferrer" className="group">
    <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.1} transitionSpeed={400}>
    <div className="p-5 rounded-xl shadow-xl border-1 border-gray-300 flex-col justify-between max-w-xs h-76"> 
        <div className="flex w-full justify-start">{logo}</div>
        <div className="w-full font-bold text-2xl font-mono ">{title}</div>
        <div className="w-full text-gray-500 font-light font-mono">{about}</div>
        <div className="flex flex-wrap"></div>
        <div className="flex flex-wrap gap-1 mt-2">
            {skills.map((skill, index) => (
                <span key={index} className="bg-gray-200 rounded px-2 py-1 text-sm font-mono text-gray-800">
                    {skill}
                </span>
            ))}
        </div>
    </div>
    </Tilt></a>)
}