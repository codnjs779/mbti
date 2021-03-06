import React from "react";
import styles from "./Result.module.css";
import BlackButton from "../button/blackBtn/BlackButton";
import YellowButton from "../button/yellowBtn/YellowButton";
import { useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

const shareURL = "https://chemistry-test.co.kr";

const ResultView = (result) => {
    let { blood, constellation, mbti, zodiacSign } = result.result.content;
    const { bloodImg, constellationImg, mbtiImg, zodiacSignImg } = result.result.img;
    const { bloodScore, constellationScore, mbtiScore, zodiacSignScore } = result.result.individuallyScore;
    const { meName, youName } = result.result.name;
    let score = Math.ceil(result.result.score);

    const retryNavigate = useNavigate();

    const retryTest = () => {
        retryNavigate("/");
    };
    const onShareBtn = () => {
        alert("링크복사가 완료되었습니다!");
    };

    if (result !== "") {
        let mbtiChange = mbti.replaceAll("me", meName);
        const mbtiResultChange = mbtiChange.replaceAll("you", youName);
        mbti = mbtiResultChange;
        let bloodChange = blood.replaceAll("me", meName);
        const bloodResultChange = bloodChange.replaceAll("you", youName);
        blood = bloodResultChange;
    }

    return (
        <div className={styles.resultBox}>
            <section className={styles.scoreSection}>
                <div className={styles.title}>나와 상대의 궁합은</div>
                <div className={styles.score}>{score}점</div>

                <div>
                    <progress className={styles.progress} max="100" value={score} />
                </div>

                <div className={styles.scoreBox}>
                    <div>
                        <img src={bloodImg} alt="혈액형" />
                        <div>혈액형</div>
                        <div>{bloodScore}점</div>
                    </div>

                    <div>
                        <img src={constellationImg} alt="12지신" />
                        <div>12지신</div>
                        <div>{constellationScore}점</div>
                    </div>

                    <div>
                        <img src={mbtiImg} alt="mbti" />
                        <div>MBTI</div>
                        <div>{mbtiScore}점</div>
                    </div>

                    <div>
                        <img src={zodiacSignImg} alt="별자리" />
                        <div>별자리</div>
                        <div>{zodiacSignScore}점</div>
                    </div>
                </div>
            </section>

            <section className={styles.result}>
                <div className={styles.title}>결과 해석</div>
                <ul className={styles.resultContents}>
                    <li>{blood}</li>
                    <br />
                    <li>{constellation}</li>
                    <br />
                    <li>{mbti}</li>
                    <br />
                    <li>{zodiacSign}</li>
                </ul>
            </section>
            <section className={styles.buttonBox}>
                <div className={styles.retry}>
                    <BlackButton onClick={retryTest} buttonTxt="다시하기" />
                </div>
                <CopyToClipboard text={shareURL}>
                    <div className={styles.share}>
                        <YellowButton onClick={onShareBtn} buttonTxt="링크 공유하기" />
                    </div>
                </CopyToClipboard>
            </section>
        </div>
    );
};

export default ResultView;
