import {useRouter} from "next/router";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

const preventDefault = f => e => {
    e.preventDefault()
    f(e)
}

export default function NewCategory() {
    const router = useRouter()
    const [name, setName] = useState('')
    const id = uuidv4()

    const handleParam = setValue => e => setValue(e.target.value)
    const handleSubmit = preventDefault(async () => {
        await fetch(`/api/recorder/categories/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({name: name})
        });
        await router.push({
            pathname: "/categories"
        })
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='name'
                    value={name}
                    onChange={handleParam(setName)}
                    placeholder='Name'
                    aria-label='Name'
                />
                <input type="submit"/>
            </form>
        </div>
    )
}