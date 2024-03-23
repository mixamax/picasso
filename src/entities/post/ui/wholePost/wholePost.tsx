import styles from "./wholePost.module.css";
import { Button } from "../../../../shared";

type Props = {
    data: {
        userId: number;
        id: number;
        title: string;
        body: string;
        onClickHandler: () => void;
    };
};

export const WholePost = ({ data }: Props) => {
    return (
        <div className={styles["whole-post_container"]}>
            <span>{data.id}</span>
            <span className={styles["whole-post_title"]}>{data.title}</span>
            <span className={styles["whole-post_content"]}>{data.body}</span>
            <Button
                button_text={"к списку постов"}
                onClickHandler={data.onClickHandler}
            />
        </div>
    );
};

// export default WholePost;
