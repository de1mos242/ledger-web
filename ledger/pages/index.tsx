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

                <p>
                    Go to {' '}
                    <Link href="/categories"><a>Categories</a></Link>
                </p>
            </main>
        </div>
    )
}
