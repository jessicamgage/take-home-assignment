//Third party imports
import React, {useEffect, useState} from 'react'
import {useQuery} from 'react-query'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography'

//Local imports
import { getMobilities } from './api'

//The purpose of this file is to query the mobility API and display it graphically.
const Mobility = () => {
    const [dataType, setDataType] = useState('')
    const {isLoading, data: mobility} = useQuery(['mobilities'], getMobilities)

    let mobilityData = []

    //This useEffect maps the different types of mobility from the user to one spot for counting.
    useEffect(() => {
        if (!isLoading) {
            const typesOfMobility = Object.values(mobility.tags)
            mobilityData = typesOfMobility.map((mobilityType) => mobilityType.split(",")[1]) //Removing , for nicer syntax
        }            
    }, [isLoading])

    //This useEffect sets the number of times a particular mode of transport is used.
    useEffect(() => {
        if (!isLoading) {
            const dataType2 = [
                { name: 'Transit', Usages: mobilityData?.filter((transportMode) => transportMode === 'TRANSIT').length },
                { name: 'Food Delivery', Usages: mobilityData?.filter((transportMode) => transportMode === 'FOOD_DELIVERY').length },
                { name: 'Scooters', Usages: mobilityData?.filter((transportMode) => transportMode === 'SCOOTERS').length },
                { name: 'Rideshare', Usages: mobilityData?.filter((transportMode) => transportMode === 'RIDESHARE').length },
                { name: 'Bikeshare', Usages: mobilityData?.filter((transportMode) => transportMode === 'BIKESHARE').length },
            ]
            setDataType(dataType2)
        }            
    }, [isLoading])

    return (
    <div>
    <Box display="flex" justifyContent="center" style={{paddingBottom: '20px'}}> 
        <Typography style={{fontSize: 22}}>Your Mobility</Typography>
    </Box>

    {isLoading ? <CircularProgress/> : (
        <>
            <ResponsiveContainer width="100%" aspect={3}>
                {/* Reference README for aspect={3} */}
                <BarChart
                width={500}
                height={300}
                data={dataType}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Usages" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </>
    )}
    
    </div>
)}

export default Mobility