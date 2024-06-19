import { useState } from 'react'
import ParkingListHeader from './ParkingListHeader'
import ParkingListItem from './ParkingListItem'
import styles from './parkinglist.module.css'

export default function ParkingList({ data }) {
  const [spots, setSpots] = useState(data)

  const handleOccupySpot = (spotId) => {
    const licensePlate = prompt('Enter your license plate:')
    if (licensePlate) {
      const updatedSpots = spots.map((spot) =>
        spot.pk === spotId
          ? {
              ...spot,
              license_plate: licensePlate,
              timestamp: new Date().toISOString(),
            }
          : spot
      )
      setSpots(updatedSpots)
    }
  }

  const handleFreeSpot = (spotId) => {
    const updatedSpots = spots.map((spot) =>
      spot.pk === spotId
        ? { ...spot, license_plate: null, timestamp: null }
        : spot
    )
    setSpots(updatedSpots)
  }

  const sortedSpots = spots.sort((a, b) => {
    const spotNumberA = parseInt(a.pk.split('_')[1], 10)
    const spotNumberB = parseInt(b.pk.split('_')[1], 10)
    return spotNumberA - spotNumberB
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.listContainer}>
        <ParkingListHeader />
        {sortedSpots.map((spot) => (
          <ParkingListItem
            key={spot.pk}
            spot={spot}
            onOccupySpot={() => handleOccupySpot(spot.pk)}
            onFreeSpot={() => handleFreeSpot(spot.pk)}
          />
        ))}
      </div>
    </div>
  )
}
