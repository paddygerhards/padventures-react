import { useState, useEffect } from 'react';

interface Post {
    id: string;
    title: string;
    content: string;
    author: string;
}

const useFetchPosts = (url: string) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: Post[] = await response.json();
                setPosts(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [url]);

    return { posts, loading, error };
};

export default useFetchPosts;