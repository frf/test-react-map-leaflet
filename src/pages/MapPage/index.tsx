import React from 'react'
import PageHeader from '../../components/PageHeader';
import { Map, Marker, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
// import useSwr from "swr";

import './styles.css';
// import api from '../../services/api';
import dataLocations from '../../assets/poi.json';

// const fetcher = (url: string) => api.get(url).then(res => res.data)

export default function MapPage() {
    // const url = "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
    // const { data, error } = useSwr(url, { fetcher });
    // const crimes = data && !error ? data.slice(0, 100) : [];

    const dataPositons = dataLocations ? dataLocations.slice(0, 50000) : [];
    return (
        <div id="page-main" className="container">
            <PageHeader title="Maps"/>

            <main>
                <fieldset>
                    <div>
                        <Map center={[-23.553541, -46.633154]} zoom={9}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />

                            <MarkerClusterGroup>
                                {dataPositons.map( (data: { name: any; latitude: any; longitude: any;}, i: any) => {
                                    return (
                                        <Marker
                                            key={i}
                                            position={[data.latitude, data.longitude]} />
                                    );
                                })}
                            </MarkerClusterGroup>
                        </Map>
                    </div>
                </fieldset>
            </main>
        </div>
    )
}
