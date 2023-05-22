import React from 'react'
import './FiltersList.scss'

const FiltersList = (props) => {

    const  {filterByABV, filterByPH} = props

    return (
        <div className="filters__section">
            <p>Пиво-фильтр:</p>
            <div className="filtersList">
                <div className="filtersList__filter">
                    <input onClick={filterByABV} type="checkbox" id="abv" name="abv" />
                    <label htmlFor="abv">Большой процент алкоголя (&rsaquo; 6.0%)</label>
                </div>
                <div className="filtersList__filter">
                    <input onClick={filterByPH} type="checkbox" id="ph" name="ph" />
                    <label htmlFor="ph">Высокая кислотность (pH &lsaquo; 4.0%)</label>
                </div>
            </div>
        </div>
    )
}

export default FiltersList
