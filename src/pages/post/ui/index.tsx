import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../shared";
import styles from "./post.module.css";
import { usePostQuery } from "../../../entities";

export const Post = () => {
    const { id } = useParams();
    const { data: post, isLoading, isError } = usePostQuery(`${id}`);
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate("/");
    };
    if (isError) {
        return <div>ошибка</div>;
    }
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (!post || Array.isArray(post)) {
        return <div>Пост не найден</div>;
    }

    return (
        <div className={styles["post_container"]}>
            <span>{post.id}</span>
            <span className={styles["post_title"]}>{post.title}</span>
            <span className={styles["post_content"]}>{post.body}</span>
            <Button
                button_text={"к списку постов"}
                onClickHandler={onClickHandler}
            />
        </div>
    );
};
