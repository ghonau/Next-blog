import NavBar from '../components/NabBar'; 
import Head from 'next/head'; 


import '../styles/globals.css'
function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <link rel="icon" href='/icons/favicon.ico'></link>
            </Head>
            <header>
                <NavBar />
            </header>
            <Component {...pageProps} />

        </>
    )
}

export default App; 