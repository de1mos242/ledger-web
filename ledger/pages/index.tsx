import Head from 'next/head'
import Link from "next/link";

export default function Home() {

    return (
        <div>
            <Head>
                <title>Ledger</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <h1>
                    Welcome to Ledger
                </h1>
                <h3>please, follow to <Link href="/categories"><a>categories</a></Link> </h3>
            </main>
        </div>
    )
}
