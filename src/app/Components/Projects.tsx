"use client";
import { useState, useEffect } from "react";
export default function Projects() {

    // Update the state type
    const [data, setData] = useState<any>(null);

    const getData = async () => {
        const res = await fetch("./api");
        const data = await res.json();
        console.log(data);
        setData(data[0]);
    }


    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h2> {data?.projectId}</h2>
            <h2> {data?.title}</h2>
            <h2> {data?.owner}</h2>
        </div>
    );
}
