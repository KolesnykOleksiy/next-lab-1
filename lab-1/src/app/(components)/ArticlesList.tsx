import {Post} from "@/app/(types)/Post";

interface ArticlesProps {
    posts: Post[];
}

export function ArticlesList({ posts }: ArticlesProps) {
    return (
        <div>
            {posts.map((post) => (
                <div className="mb-10" key={post.id}>
                    <h2 className="text-xl font-semibold text-white-800 mb-2">{post.title}</h2>
                    <p className="text-grey-600">{post.body}</p>
                </div>
            ))}
        </div>
    );
}