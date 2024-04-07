import Image from "next/image";
import styles from "./home.module.css"
import { SessioProvider } from "next-auth/react";
import { getServerSession } from 'next-auth';
import { options } from "./api/auth/[...nextauth]/options";
const Home = async () => {
  const session = await getServerSession(options);

  console.log("This is from home page", session);
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Notorious thought agency</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse quas fugiat explicabo ea perferendis </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Learn More</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="brands" className={styles.brand} fill />
      </div>
    </div>
    <div className={styles.imageContainer}>
      <img src="/hero.gif" alt="hero image" className={styles.heroImg} width={400} height={400} />
    </div>
  </div>;

};

export default Home;