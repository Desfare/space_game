import React, { FC, useEffect, useState } from 'react';
import { Galaxy } from '../../Models/Galaxy/Galaxy';
import { Planet } from '../../Models/Galaxy/Planets/Planet';
import { Sector } from '../../Models/Galaxy/Sector';
import InfluenceBar from './InfluenceBar';
import SectorComponent from './SectorComponent';

interface GalaxyProps {
    galaxy: Galaxy;
    setGalaxy: (galaxy: Galaxy) => void
}


const GalaxyComponent: FC<GalaxyProps> = ({galaxy, setGalaxy}) => {
    const [selectedSector, setSelectedSector] = useState<Sector | null>(null);
    
    function warp(sector: Sector) {
        if (selectedSector && selectedSector !== sector/*  && selectedSector.spaceShip?.canTravel(sector) */) {
            selectedSector.travel(sector)
            setSelectedSector(null)
        } else {
            setSelectedSector(sector)
        }
    }

    function travelableSector() {
        galaxy.travelableSector(selectedSector)
        updateGalaxy()
    }

    function updateGalaxy() {
        const newGalaxy = galaxy.getCopyGalaxy()
        setGalaxy(newGalaxy)
    }

    useEffect(() => {
        travelableSector()
    }, [selectedSector])

    return (
        <div className='galaxy'>
            <div className='galaxy_map'>
                {galaxy.sectors.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(sector =>
                            <div key={sector.id} className='sector'>
                                <InfluenceBar
                                    sector={sector}
                                />
                                <SectorComponent
                                    sector={sector}
                                    warp={warp}
                                    selected={sector.x === selectedSector?.x && sector.y === selectedSector?.y}
                                /> 
                            </div>
                        )}
                    </React.Fragment>    
                )} 
            </div>
        </div>
    );
};

export default GalaxyComponent;