import styles from './TweetAplication.modules.css';
export default function Tweet(props){
    return(
        <div className={styles.tweetContainer}> 
            <img className={styles.avatar} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdyuFHi8Ioyc7f9zv5Buwv_h8VBak0-2puA&s'} />
            <div className={styles.user}>
                <span className={styles.userName}>David Cristiano</span>
                <span className={styles.userUserName}>@DeivinDeveloper🍀</span>
                <span className={styles.date}>Hoje</span>
            </div>
            <div className={styles.tweetContainer}>
             <li>{props.children}</li>
            </div>
        </div>
    )
}