import {Comment} from "@/app/(types)/Comment";

interface CommentsProps {
    comments: Comment[];
}

export function Comments({ comments }: CommentsProps) {
    return (
        <div>
            <h1 className="text-2xl text-blue-500">Comments block:</h1>
            {comments.map((comment) => (
                <div className="mb-10" key={comment.id}>
                    <p className="text-grey-600">{comment.email}</p>
                    <p className="text-grey-600">{comment.body}</p>
                </div>
            ))}
        </div>
    );
}