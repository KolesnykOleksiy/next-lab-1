import {ArticlesList } from "@/app/(components)/ArticlesList";
import {Post} from "@/app/(types)/Post";

const getPosts = async (): Promise<Post[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
    if (!response.ok) {
        throw new Error('Помилка при отриманні даних');
    }
    return response.json();
};
export default async function ArticlesPage() {
    const posts = await getPosts();

    return (
        <>
            <div>Home page for articles</div>
            <ArticlesList posts={posts} />
        </>
    );
}
