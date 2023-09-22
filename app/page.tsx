import Head from 'next/head';
import styles from '../styles/styles.module.css';

const userList = [
  {
    img_url: "https://cdn1.workadvantage.in/images/img/image/856254/ccef4b0dfc.jpeg",
    name: "Gabe Lewis",
    department: "Frontend",
    dob: "25/04/1998",
  },
  {
    img_url: "https://cdn1.workadvantage.in/images/img/image/856254/ccef4b0dfc.jpeg",
    name: "Cathy Simms",
    department: "DevOps",
    dob: "28/02/1993",
  },
  {
    img_url: "https://cdn1.workadvantage.in/images/img/image/2642440/304e6a2a3d.jpeg",
    name: "Jake Palmer",
    department: "Backend",
    dob: "03/06/1996",
  },
  {
    img_url: "https://cdn3.workadvantage.in/images/img/image/2642443/0b4a3386d6.jpeg",
    name: "Charles Minor",
    department: "Business Development",
    dob: "03/07/1994",
  },
];

const Header = () => (
  <header className={styles.header}>
    <h1>User Profiles</h1>
  </header>
);

const Footer = () => (
  <footer className={styles.footer}>
    &copy; 2023 User Profiles App
  </footer>
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>User Profiles</title>
        <meta name="description" content="User Profiles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <div className="user-profiles">
          {userList.map((user, index) => (
            <div className="user-profile" key={index}>
              <img src={user.img_url} alt={user.name} />
              <h2>{user.name}</h2>
              <p>Department: {user.department}</p>
              <p>Date of Birth: {user.dob}</p>
              <button className="wish-button">Wish</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
