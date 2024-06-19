import NavBar from './components/NavBar'
import ParkingList from './components/ParkingList'
import data from '../parking-spots.json'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const spotsPerPage = 10
  const [loading, setLoading] = useState(true)
  const [newData, setNewData] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://20qthdi36m.execute-api.eu-west-3.amazonaws.com/dev/spots/get_spots',
        {
          headers: {
            'x-api-key': '', //TODO enter API key
          },
        }
      )
      setNewData(response.data)
      console.log(response.data)
      console.log('FETCHING MORE DATA')
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()

    const intervalId = setInterval(() => {
      fetchData()
    }, 10000)

    return () => clearInterval(intervalId)
  }, [])

  const displayedData = newData.slice(0, spotsPerPage)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='App'>
      <NavBar />
      <ParkingList data={displayedData} />
    </div>
  )
}

export default App
