import Link from "next/link";
import {useEffect, useState} from "react";

function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        (async function() {
            const res = await fetch("/api/recorder/categories")
            setCategories(await res.json())
        })()
    }, [])

    return (
        <div>

            <main>
                <h1>Categories</h1>
                <ul>
                    {categories.map((v) => {
                        return (<li key={v.id}>{v.name}</li>)
                    })}
                </ul>
                <p>
                    Create <Link href="/categories/new"><a>new</a></Link>
                </p>
            </main>
        </div>
    )
}

export default Categories