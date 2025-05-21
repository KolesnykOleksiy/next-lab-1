import React from 'react';
import {Post} from "@/app/(types)/Post";
import {ArticlesList} from "@/app/(components)/ArticlesList";

const getPosts = async (): Promise<Post[]> => {
    const ids = [5,13,66];
    const responses = await Promise.all(
        ids.map(id =>fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' }))
    );

    if (responses.some(response => !response.ok)) {
        throw new Error('Помилка при отриманні даних');
    }

    return Promise.all(responses.map(response => response.json()));
};
export default async function Favorite(){
    const posts = await getPosts();
    return (
        <>
            <div>
                Page for my favorite articles
            </div>
            <ArticlesList posts={posts} />
        </>

    );
};
