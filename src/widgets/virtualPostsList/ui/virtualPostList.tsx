import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import { Post } from "../../../shared";
import { PostCard } from "../../../entities";
import styles from "./virtual.module.css";
import { useNavigate } from "react-router-dom";

type Props = {
    posts: Post[];
};
export function VirtualPostsList({ posts }: Props) {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();
    const rowVirtualizer = useVirtualizer({
        count: posts.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 70,
    });
    const onClickHandler = (id: Post["id"]) => {
        navigate(`/posts/${id}`);
    };
    return (
        <div ref={parentRef} className={styles.virtual_container}>
            <div
                style={{
                    height: `${rowVirtualizer.getTotalSize()}px`,
                    width: "100%",
                    position: "relative",
                }}
            >
                {rowVirtualizer.getVirtualItems().map((virtualItem) => (
                    <div
                        key={virtualItem.key}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: `${virtualItem.size}px`,
                            transform: `translateY(${virtualItem.start}px)`,
                        }}
                    >
                        <PostCard
                            post={posts[virtualItem.index]}
                            onClickHandler={() =>
                                onClickHandler(posts[virtualItem.index].id)
                            }
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
