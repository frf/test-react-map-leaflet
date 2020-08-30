import React, { useState, useEffect,  } from 'react'
import PageHeader from '../../components/PageHeader';
import { Map, Marker, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";

import './styles.css';
import api from '../../services/api';


interface IMarker {
    name: string; 
    latitude: number; 
    longitude: number;
}

export default function MapPage() {

    const [markers, setMarkers] = useState([])

    useEffect(() => {
    api.get('api/markers?limit=50000')
    .then(response => {
        const data = response.data;
        setMarkers(data);
    })
    },[])

    return (
        <div id="page-main" className="container">
            <PageHeader title="Maps"/>
            <main>
                <fieldset>
                    <div>
                        <Map center={[-23.553541, -46.633154]} zoom={9}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">App2u.co</a> contributors'
                            />
                            <MarkerClusterGroup>
                                {
                                    markers.map((marker: IMarker, i: any) => {
                                        return (
                                                <Marker
                                                key={i}
                                                position={[marker.latitude, marker.longitude]} />
                                        )
                                    })
                                }
                            </MarkerClusterGroup>
                        </Map>
                    </div>
                </fieldset>
            </main>
        </div>
    )
}
