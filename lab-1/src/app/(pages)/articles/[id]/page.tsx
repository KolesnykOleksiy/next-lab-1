import React from 'react';
import { Post } from "@/app/(types)/Post";
import { Comment } from "@/app/(types)/Comment";
import { ArticlesList } from "@/app/(components)/ArticlesList";
import {Comments} from "@/app/(components)/Comments";

interface FavoritePageProps {
    params: { id: string };
}

const getPost = async (id: string): Promise<Post> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Помилка при отриманні даних');
    }

    return response.json();
};
const getComments = async (id: string): Promise<Comment[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Помилка при отриманні даних');
    }

    return response.json();
};

export default async function Favorite({ params }: FavoritePageProps) {
    const id = (await params).id
     const comments = await getComments(id);
     const post = await getPost(id);


    return (
        <>
            <div>
                Page for my favorite article (ID: {id})
            </div>
            <ArticlesList posts={[post]} />
            <Comments comments={comments}/>
        </>
    );
}
