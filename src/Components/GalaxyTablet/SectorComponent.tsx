import React, { FC } from 'react';
import { Sector } from '../../Models/Galaxy/Sector';

interface SectorProps {
    sector: Sector
    warp: (sector: Sector) => void;
    selected: boolean
}


const SectorComponent: FC<SectorProps> = ({sector, warp, selected}) => {
    return (
        <div 
            className={['planet', sector.available && !sector.spaceShip ? "availableSector" : ''].join(' ')}
            onClick={() => warp(sector)}
        >
            {sector.spaceShip?.shipPic && <img 
                className={['shipOnMap', selected ? 'selectedSector' : ''].join(' ')} 
                src={sector.spaceShip.shipPic} 
                alt="">
            </img>}
            {sector.planet?.planetPic && <img 
                className={['planetImg'].join(' ')}
                src={sector.planet.planetPic} 
                alt="">
            </img>}
        </div>
    );
};

export default SectorComponent;