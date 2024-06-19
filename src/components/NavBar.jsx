import styles from './navbar.module.css'
import logo from '../images/mobileye.svg'

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <img src={logo} alt='Logo' className={styles.logoImage} />
        <div className={styles.logo}>Mobileye Parking System</div>
      </div>
    </nav>
  )
}
