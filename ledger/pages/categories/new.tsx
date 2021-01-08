import {useRouter} from "next/router";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {Button, TextField} from "@material-ui/core";
import {makeRequest} from "../../services/http_service";

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
        await makeRequest(`/api/recorder/categories/${id}`, {
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
                <TextField
                    id="standard-basic"
                    label="Name"
                    type="text"
                    name='name'
                    value={name}
                    onChange={handleParam(setName)}
                    placeholder='Name'
                    aria-label='Name'
                />
                <Button variant="contained" color="primary" type="submit">Create</Button>
            </form>
        </div>
    )
}