import styles from './parkinglist.module.css'

export default function ParkingListItem({ spot, onOccupySpot, onFreeSpot }) {
  const { pk, spot_type, vehicle_type, license_plate, timestamp } = spot
  const spotNumber = pk.split('_')[1]

  return (
    <div
      className={`${styles.listItem} ${
        license_plate ? styles.occupied : styles.empty
      }`}
    >
      <div className={styles.itemContents}>{spotNumber}</div>
      <div className={styles.itemContents}>{spot_type}</div>
      <div className={styles.itemContents}>{vehicle_type}</div>
      <div className={styles.itemContents}>{license_plate || 'Empty'}</div>
      <div className={styles.itemContents}>{timestamp || 'N/A'}</div>
      {!license_plate ? (
        <button className={styles.occupyButton} onClick={onOccupySpot}>
          Occupy
        </button>
      ) : (
        <button className={styles.freeButton} onClick={onFreeSpot}>
          Free Up
        </button>
      )}
    </div>
  )
}
