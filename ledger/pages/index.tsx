import Head from 'next/head'
import Link from "next/link";
import {useEffect, useState} from "react";
import {makeRequest} from "../services/http_service";

export default function Home() {
    const [userInfo, setUserInfo] = useState<{ firstName: string, id: string } | undefined>()

    useEffect(() => {
        (async function () {
            let url = "/api/accounting/user/info";
            const res = await makeRequest(url)
            setUserInfo(await res.json())
        })()
    }, [])

    return (
        <div>
            <Head>
                <title>Ledger</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <h1>
                    Welcome '{userInfo?.firstName} ({userInfo?.id})' to Ledger
                </h1>

                <p>
                    Go to {' '}
                    <Link href="/categories"><a>Categories</a></Link>
                </p>
            </main>
        </div>
    )
}
