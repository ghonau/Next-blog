
import Head from 'next/head'; 
import Link from 'next/link' ;
import { getPosts } from '../lib/posts';


export async function getStaticProps(){
    const posts = await getPosts();
    return {
        props: {

            posts
        }
        
    }    
}
function HomePage({posts}) {
 console.log('[HomePage] render', posts)
    return (
        <>               
            <Head>
                <title>Home page</title>
            </Head>
            <main>
                <h1>My Next Blog</h1>
                <ul>                  
                   {
                        posts.map(post => {
                            return (<li key={post.slug}>
                                <Link href={`posts/${post.slug}`}>
                                    <a> {post.title} </a>
                                </Link>
                            </li>)
                        })
                   }
                   
                  
                </ul>
            </main>
        </>
    )
}

export default HomePage; 
