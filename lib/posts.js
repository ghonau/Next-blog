import {readdir,  readFile} from 'fs/promises'; 
import matter from 'gray-matter';
import { marked } from 'marked';


export async function getPost(slug) {

    var source = await readFile(`contents/posts/${slug}.md`, 'utf-8'); 

    const {content, data} = matter(source);     

    return {
        body  : marked.parse(content), 
        title: data.title,
        slug : data.slug 
    }
}

export async function getPosts() {
    var slugs = await getSlugs(); 
    
    const posts = []; 
    for(const slug of slugs){        
        const post = await getPost(slug) ;
        posts.push({slug, ...post})
    }
    return posts;
}

export async function getSlugs() {
    const suffix = '.md'; 
    var files = await readdir(`contents/posts`) 
    return files.filter(file => file.endsWith(suffix)).map(file => file.slice(0, -suffix.length));
}



