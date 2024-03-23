import { VirtualPostsList } from "../../../widgets";
import { usePostQuery } from "../../../entities";
export const Home = function () {
    const { data: posts = [], isLoading, isError } = usePostQuery("");

    if (isError) {
        return <div>ошибка</div>;
    }
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (!posts || !Array.isArray(posts)) {
        return <div>Посты не найдены</div>;
    }
    return <VirtualPostsList posts={posts} />;
};
