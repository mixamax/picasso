import style from "./postCard.module.css";
import { Button, Post } from "../../../../shared";

type Props = {
    post: Post;
    onClickHandler: () => void;
};

export const PostCard = ({ post, onClickHandler }: Props) => {
    return (
        <div className={style["post"]}>
            {" "}
            <span className={style["post-text"]}>
                {post.id}. <b>{post.title}</b> {post.body}
            </span>
            <Button button_text={"просмотр"} onClickHandler={onClickHandler} />
        </div>
    );
};
