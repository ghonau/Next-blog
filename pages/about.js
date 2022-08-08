import Head from 'next/head'; 


function AboutPage() {

    
    console.log('[AboutPage] render')
    return (
        <>
            <Head>
                <title>My about page title</title>
            </Head>

            <main><h1>My About Page</h1></main>
        </>
    )
}

export default AboutPage; 
