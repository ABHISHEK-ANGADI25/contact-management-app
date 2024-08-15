import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Define the types
// Interface for the country information part of the response
interface CountryInfo {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  }
  
  // Interface for the full country data response
  interface CountryData {
    country: string;
    countryInfo: CountryInfo;
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    todayRecovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    tests: number;
    testsPerOneMillion: number;
    population: number;
    continent: string;
    oneCasePerPeople: number;
    oneDeathPerPeople: number;
    oneTestPerPeople: number;
    activePerOneMillion: number;
    recoveredPerOneMillion: number;
    criticalPerOneMillion: number;
  }
  
  // Type for the full response, which is an array of CountryData
  type CountriesData = CountryData[];
  

// Fetch function
const fetchCountriesData = async (): Promise<CountriesData> => {
  const response = await axios.get('https://disease.sh/v3/covid-19/countries');
  return response.data;
};

const Map: React.FC = () => {
    const { data, isLoading, error } = useQuery<CountriesData>({
        queryKey: ['countriesData'],
        queryFn: fetchCountriesData,
      });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  if (!data) return <p>No data available</p>;

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((country) => (
        <Marker key={country.country} position={[country.countryInfo.lat, country.countryInfo.long]}>
          <Popup>
            <div>
              <h3>{country.country}</h3>
              <p>Cases: {country.cases}</p>
              <p>Recovered: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
