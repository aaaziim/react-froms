import Uncle from '../Uncle/Uncle';
import Aunt from '../Aunt/Aunt'
import "./Grandpa.css"
import { useContext } from 'react';
import { createContext } from 'react';
export const AssetContext = createContext("Gold");

const Grandpa = () => {

    return (
        <div className='grandpa'>
            <div>
                <h2>Grandpa</h2>
                <AssetContext.Provider value="Gold">
                    <div className='flex'>
                        <Uncle></Uncle>
                        <Aunt></Aunt>
                    </div>
                </AssetContext.Provider>

            </div>


        </div>
    );
};

export default Grandpa;