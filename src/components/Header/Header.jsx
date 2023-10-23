import styles from "./Header.module.scss";


export default function Header(){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.Header_container}>
                    <div className={styles.ferst_btn}>
                        <div className={styles.ferst_btn_container}>
                            <p>👋Hi,</p>
                        </div>
                    </div>
                    <div className={styles.two_btn}>
                        <div className={styles.two_btn_container}>
                            <p>my name Valera.C, i am frontend-dev and designer</p>
                        </div>
                    </div>
                    <div className={styles.three_btn}>
                        <div className={styles.three_btn_container}>
                            <p>my portfolio 🔍</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}