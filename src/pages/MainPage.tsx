import React from 'react';
import Main from "../components/MainContainer/Main";
import RightSide from "../components/SideContainer/RightSide";
import styles from "./MainPage.module.css"

const MainPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Main/>
            </div>
            <div className={styles.rightSide}>
                <RightSide/>
            </div>
        </div>
    );
};

export default MainPage;