import React, { memo } from "react";
import styles from "./MbtiModal.module.css";

const MbtiModal = memo(({ onMbtiPickController }) => {
    const mbti = ["ENFJ", "ENFP", "ENTJ", "ENTP", "ESFJ", "ESFP", "ESTJ", " ESTP", "INFJ", "INFP", "INTJ", "INTP", "ISFJ", "ISFP", "ISTJ", "ISTP"];
    const usermbti = (mbtiItem) => {
        const userpick = mbtiItem;
        onMbtiPickController(userpick);
    };
    const mbtiList = mbti.map((mbtiItem) => {
        return (
            <li key={mbtiItem} className={styles.mbtiItem} onClick={() => usermbti(mbtiItem)}>
                {mbtiItem}
            </li>
        );
    });
    return <ul className={styles.mbtiSet}>{mbtiList}</ul>;
});
export default MbtiModal;
