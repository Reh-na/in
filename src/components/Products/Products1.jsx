import React, { useState } from 'react';
import './product.css';
import pillowbearing from '../../images/pillow-block-bearing.jpg'
import ballbearing from '../../images/ball-bearing.jpg'
import oilsealing from '../../images/oil-seals.jpg'
import hydraulicseal from '../../images/hydraulic-seals.jpg'
import handtool from '../../images/hand-tools.jpg'
import powertool from '../../images/power-tools.jpg'
import airfilter from '../../images/air-filter.jpg'
import lubefilter from '../../images/lube-filter.jpg'
import fuelfilter from '../../images/fuel-filter.jpg'
import Hydraulicfilter from '../../images/hydraulic-filter.jpg'
import hydraulicfitting from '../../images/hydraluic-fittings.jpg'
import gifitting from '../../images/gi-fittings.jpg'
import aluminiumcoupling from '../../images/aluminium-couplings.jpg'
import aluminiumcamlock from '../../images/aluminium-camlocks.jpg'
import hydrualichoses from '../../images/hydraulic-hoses.jpg'
import radiatorhoses from '../../images/radiator-hoses.jpg'
import suctionhoses from '../../images/suction-hoses.jpg'
import waterhoses from '../../images/water-hoses.jpg'
import plastichoses from '../../images/plastic-hoses.jpg'
import airhoses from '../../images/air-hoses.jpg'
import steelhoses from '../../images/steel-hoses.jpg'
import vbelt from '../../images/v-belts.jpg'
import oring from '../../images/o-rings.jpg'
import safetyitems from '../../images/safety-items.jpg'
import ProductCard from './ProductCard';

const Products1=({language,content}) =>{
    const products=[
        {
         name:'Pillow Block Brearing',
         imageurl:pillowbearing,
         category:'Bearing'
        },
        {
            name:'Ball Brearing',
            imageurl: ballbearing,
            category:'Bearing'   
        },
        {
            name:'Oil Seals',
            imageurl: oilsealing,
            category:'Seals'   
        },
        {
            name:'Hydraulic Seals',
            imageurl: hydraulicseal,
            category:'Seals'   
        },
        {
            name:'Hand Tools ',
            imageurl: handtool,
            category:'Tool & Equipment'   
        },
        {
            name:'Power Tools ',
            imageurl: powertool,
            category:'Tool & Equipment'   
        },  
        {
            name:'Air Filter',
            imageurl: airfilter,
            category:'Filters'   
        },
        {
            name:'lube Filter',
            imageurl: lubefilter,
            category:'Filters'   
        },
        {
            name:'fuel Filter',
            imageurl: fuelfilter,
            category:'Filters'   
        },
        {
            name:'Hydraulic Filter',
            imageurl: Hydraulicfilter,
            category:'Filters'   
        },
        {
            name:'Hydraulic Fittings',
            imageurl: hydraulicfitting,
            category:'Fittings'   
        },
        {
            name:'GI Fittings',
            imageurl: gifitting,
            category:'Fittings'   
        },
        {
            name:'Aliminium Coupling',
            imageurl: aluminiumcoupling,
            category:'Fittings'   
        },
        {
            name:'Aluminium Camlocks',
            imageurl: aluminiumcamlock,
            category:'Fittings'   
        },
        {
            name:'Hydraulic Hoses',
            imageurl: hydrualichoses,
            category:'Hoses'   
        },
        {
            name:'Radiator Hoses',
            imageurl: radiatorhoses,
            category:'Hoses'   
        },
        {
            name:'Suction Hoses',
            imageurl: suctionhoses,
            category:'Hoses'   
        },
        {
            name:'Water Hoses',
            imageurl: waterhoses,
            category:'Hoses'   
        },
        {
            name:'Plastic Hoses',
            imageurl: plastichoses,
            category:'Hoses'   
        },
        {
            name:'Air Hoses',
            imageurl: airhoses,
            category:'Hoses'   
        },
        {
            name:'Steel Hoses',
            imageurl: steelhoses,
            category:'Hoses'   
        },
        {
            name:'V Belts',
            imageurl: vbelt,
            category:'V Belts'   
        },
        {
            name:'O Ring',
            imageurl: oring,
            category:'O Ring'   
        },
        {
            name:'safety Items',
            imageurl: safetyitems,
            category:'Safety Items'   
        },

    ]
    const [activeCategory, setActiveCategory] = useState('All');

    const handleButtonClick = (category) => {
        setActiveCategory(category);
    };

    // Function to filter products based on the active category
    const filteredProducts = () => {
        if (!activeCategory || activeCategory === 'All') {
            return products; // Display all products when no category is selected or "All Products" button is clicked
        } else {
            // Filter products based on category
            return products.filter(product => product.category === activeCategory);
        }
    };

  

    return (
        <div className='mains'>
            <section id='bgcontact' className='bg-overlay bg-overlay-gradient pb-0 ng-section mb-0 '>
                <div id="heads" className="flex justify-center items-center h-[345px] sm:h-[445px]">
                    <div className="relative w-2/3">
                        <div className='w-full flex justify-center'>
                            <div className="h-20 w-16 bg-red-600 "></div>
                        </div>
                        <div className="absolute top-4 left-0 text-white text-4xl w-full flex justify-center tracking-wide  z-10  font-bold ">   {content.header.products} </div>
                    </div>
                </div>
            </section>
            <div className='w-full bg-zinc-800 text-white'>
                <div className='w-full flex justify-center items-center pt-16'>
                    <div className='relative'>
                        <div className='h-24 w-20 border border-2 border-red-600 '></div>
                    </div>
                    <div className='absolute w-full z-10 flex flex-col justify-center items-center'>
                        <div className='text-sm sm:text-lg text-[#7f7e7e] w-full text-center'>Great & Awesome Products</div>
                        <div id="contact" className=' w-full text-center text-3xl font-bold tracking-wide text-white'> OUR PRODUCTS<span className='text-red-600'>.</span></div>
                    </div>
                </div>
                <div className='p-4'>
                    <ul className='flex justify-around items-center flex-wrap'>
                    <li className={`p-2 text-sm sm:text-lg ${activeCategory === 'All' ? 'border-b-2 border-red-600' : ''}`}>
                    <button type='button' onClick={() => handleButtonClick('All')}>All Products</button>
                </li>
                 <li className={`p-2 text-sm sm:text-lg ${activeCategory === 'Bearing' ? 'border-b-2 border-red-600' : ''}`}>
                    <button type='button' onClick={() => handleButtonClick('Bearing')}>Bearing</button>
                </li>
                <li className={`p-2 text-sm sm:text-lg ${activeCategory === 'Seals' ? 'border-b-2 border-red-600' : ''}`}>
                    <button type='button' onClick={() => handleButtonClick('Seals')}>Seals</button>
                </li>
                <li className={`p-2 text-sm sm:text-lg ${activeCategory === 'Tool & Equipment' ? 'border-b-2 border-red-600' : ''}`}>
                    <button type='button' onClick={() => handleButtonClick('Tool & Equipment')}>Tools & Equipments</button>
                </li>
                <li className={`p-2 text-sm sm:text-lg ${activeCategory === 'Filters' ? 'border-b-2 border-red-600' : ''}`}>
                    <button type='button' onClick={() => handleButtonClick('Filters')}>Filters</button>
                </li>
                <li className={`p-2 text-sm sm:text-lg ${activeCategory === 'Fittings' ? 'border-b-2 border-red-600' : ''}`}>
                    <button type='button' onClick={() => handleButtonClick('Fittings')}>Fittings</button>
                </li>
                <li className={`p-2 text-sm sm:text-lg ${activeCategory === 'Hoses' ? 'border-b-2 border-red-600' : ''}`}>
                    <button type='button' onClick={() => handleButtonClick('Hoses')}>Hoses</button>
                </li>
                <li className={`p-2 text-sm sm:text-lg ${activeCategory === 'V Belts' ? 'border-b-2 border-red-600' : ''}`}>
                    <button type='button' onClick={() => handleButtonClick('V Belts')}>V Belts</button>
                </li>
                <li className={`p-2 text-sm sm:text-lg ${activeCategory === 'O Ring' ? 'border-b-2 border-red-600' : ''}`}>
                    <button type='button' onClick={() => handleButtonClick('O Ring')}>O Rings</button>
                </li>
                <li className={`p-2 text-sm sm:text-lg ${activeCategory === 'Safety Items' ? 'border-b-2 border-red-600' : ''}`}>
                    <button type='button' onClick={() => handleButtonClick('Safety Items')}>Safety Items</button>
                </li>
                    </ul>
                    <div className='p-20 flex justify-center items-center flex-wrap  '>
                {filteredProducts().map((product, index) => (
                    <div key={index} className='flex flex-wrap justify-center items-center m-[3%] '>
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
                </div>
            </div>
        </div>
    );
}

export default Products1;
