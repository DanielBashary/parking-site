import styles from './parkinglist.module.css'

export default function ParkingListHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.headerItem}>Spot</div>
      <div className={styles.headerItem}>Spot Type</div>
      <div className={styles.headerItem}>Vehicle Type</div>
      <div className={styles.headerItem}>Occupied</div>
      <div className={styles.headerItem}>Time Entered</div>
    </div>
  )
}
