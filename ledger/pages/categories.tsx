import Link from "next/link";
import {useEffect, useState} from "react";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {makeRequest} from "../services/http_service";

function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        (async function () {
            let url = "/api/recorder/categories";
            const res = await makeRequest(url)
            setCategories(await res.json())
        })()
    }, [])

    return (
        <div>
            <h1>Categories</h1>
            <TableContainer component={Paper}>
                <Table size={"small"}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    {row.name}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <p>
                <Link href="/categories/new"><Button variant="contained" color="primary">Add new</Button></Link>
            </p>

        </div>
    )
}

export default Categories