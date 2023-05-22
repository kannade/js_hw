import React from 'react'
import './BeersCard.scss'

const BeersCard = (props) => {

    const {img, name, tagline, ph, abv, firstBrewed } = props

    return (
            <div className="beers__card">
                <img src={img} className="beers__card__img" alt="" />
                <h3 className="beers__card__title">{name}</h3>
                <p className="beers__card__tagline">{tagline}</p>
                <p>Сварено: <b>{firstBrewed}</b></p>
                <h5>Кислотность: {ph}</h5>
                <h5>Процент алкоголя: {abv}</h5>
            </div>
    )
}

export default BeersCard
