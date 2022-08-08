import Head from 'next/head' ;
import { getPost } from '../../lib/posts';





export async function  getStaticProps( ){
    

    return {
        props: {
            post :await getPost('first-post') 
        }
    }    
}


function FirstPostPage({post}){
    
    
    console.log('this is the first page', post) ;

   

    return (
        <>
            <Head>First Post</Head>
            <main>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            </main>
        </>
    )
}

export default FirstPostPage; 