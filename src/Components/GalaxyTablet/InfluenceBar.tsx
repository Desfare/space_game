import React, { FC } from 'react';
import { Sector } from '../../Models/Galaxy/Sector';

interface InfluenceBarProps {
    sector: Sector
}

const InfluenceBar: FC<InfluenceBarProps> = ({sector}) => {
    return (
        <div className='influenceBar'>
            {sector.planet?.influence?.map((infIcon, index) =>
                <div 
                    className={[infIcon].join(' ')}
                    key={index}
                ></div>
            )}
        </div>
    );
};

export default InfluenceBar;