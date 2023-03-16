import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.container}>
            <div className={styles.inner}>
                <h2 className={styles.title}>About</h2>
                <p>
                    You can feel numerous scientific phenomena in our daily life. whether you recognized it or not. And when we feel and understand it as a scientific phenomenon, we feel fun. This blog posts articles about science related to everyday life to make you feel that fun.
                </p>
                <br />
                <p>
                    All posts in this blog are made with ChatGPT, which has amazing features, as well as all images and categories. We would like to thank all the contributors to ChatGPT for allowing us to experience this amazing technological advancement.
                </p>
                <br />
                <p>
                    If you have a blog or another issue, please fill out the email below in detail and send it to us, and we will take action quickly. thank you
                </p>
                <address className={styles.email}>poiu03290@gmail.com</address>
            </div>

        </section>
    )
}