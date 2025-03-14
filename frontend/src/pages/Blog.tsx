import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export function Blog() {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });

    if (loading || !blog) {
        return <>Loading...</>;
    }

    return <>
        <FullBlog blog={blog} />
    </>;
}
