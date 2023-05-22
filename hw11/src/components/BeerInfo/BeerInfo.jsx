import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import './BeerInfo.scss'

const BeerInfo = (props) => {

    const {id} = useParams()

    const {beersArray} = props;

    const beersArr = beersArray.filter(beer => {
        return beer.id == id;
    })

    const singleBeer = beersArr[0]
    
    return (
        <div className="beer-page">
            <Link to="/" className="back-home">&#8592; Назад</Link>

            <div className="beer-info">
                <img src={singleBeer.image_url} className="beer-info__img" alt="" />

                <div className="beer-info__column">
                    <h2 className="beer-info__title">{singleBeer.name}</h2>
                    <p><b>Сварено:</b> {singleBeer.first_brewed}</p>
                    <p><b>Дрожжи:</b> {singleBeer.ingredients.yeast}</p>
                    <p className="beer-info__description"><em>{singleBeer.description}</em></p>

                    <table className="beer-info__table" border="1" cellPadding="10">
                        <tbody>
                            <tr>
                                <td><b>Кислотность</b></td>
                                <td><b>Алкоголь</b></td>
                                <td><b>Горечь</b></td>
                                <td><b>Цвет EBC</b></td>
                                <td><b>Цвет SRM</b></td>
                            </tr>
                            <tr>
                                <td>{singleBeer.ph}</td>
                                <td>{singleBeer.abv}</td>
                                <td>{singleBeer.ibu}</td>
                                <td>{singleBeer.ebc}</td>
                                <td>{singleBeer.srm}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><b>Сочетания с едой:</b> {singleBeer.food_pairing}</p>
                    <p><b>Советы:</b> {singleBeer.brewers_tips}</p>
                </div>
            </div>
        </div>
    )
}

export default BeerInfo
