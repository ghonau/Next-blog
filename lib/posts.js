import {readFile} from 'fs/promises'; 


export async function getPost(slug) {

    var data = await readFile(`contents/posts/${slug}.json`, 'utf-8'); 

    console.log('[First-Post] getPost' , data); 

    return JSON.parse(data); 
}