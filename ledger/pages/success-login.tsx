import {useEffect, useState} from "react";

function SuccessLogin() {
    const [previousPage, setPreviousPage] = useState("")
    useEffect(() => {
        const previousPageValue = localStorage.getItem("success_redirect") || "/"
        setPreviousPage(previousPageValue) // In case of problems with redirects
        window.location.replace(previousPageValue)
    }, [])

    return (
        <div>
            <h2>Please, follow the link: <a href={previousPage}>{previousPage}</a></h2>
        </div>
    )
}

export default SuccessLogin