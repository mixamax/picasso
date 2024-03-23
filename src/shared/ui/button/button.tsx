import styles from "./button.module.css";

type Props = {
    button_text: string;
    onClickHandler: () => void;
};
export const Button = ({ button_text, onClickHandler }: Props) => {
    return (
        <div className={styles["button-wrap"]}>
            <button className={styles["button"]} onClick={onClickHandler}>
                {button_text}
            </button>
        </div>
    );
};
