import Head from 'next/head'
import Link from "next/link";
import {useEffect, useState} from "react";
import {makeRequest, redirectToLogin, requestLogout} from "../services/http_service";
import {Button} from "@material-ui/core";
import {UserInfo} from "../models/user_info";

export default function Home() {
    const [userInfo, setUserInfo] = useState<UserInfo | undefined>()

    useEffect(() => {
        (async function () {
            let url = "/api/accounting/user/info";
            const res = await makeRequest(url, {}, false)
            if (res) {
                setUserInfo(await res.json())
            }
        })()
    }, [])

    const logout = async () => {
        await requestLogout()
        window.location.replace(window.location.pathname)
    }

    const login = () => {
        redirectToLogin()
    }

    return (
        <div>
            <Head>
                <title>Ledger</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <h1>
                    Welcome '{userInfo?.firstName} {userInfo?.lastName}' to Ledger
                </h1>

                <p>
                    Go to {' '}
                    <Link href="/categories"><a>Categories</a></Link>
                </p>

                <p>
                    {userInfo && <Button onClick={logout}>Logout</Button> }
                    {!userInfo && <Button onClick={login}>Login</Button> }
                </p>
            </main>
        </div>
    )
}
