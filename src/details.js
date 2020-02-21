import React from 'react';

const Details = ({item}) => {

    const content = item ? <View item={item} /> : `Для деталей нужно выбрать регион`;

    return (
        <div>
            {content}
        </div>
    )
}

const View = ({item}) => {

    const {fullname, libraries, buildings_repair, address} = item;
    return (
        <>
            <div>Данные предоставил: {fullname}</div>
            <div>Находящийся по адресу: {address}</div>
            <div>Всего библиотек: {libraries}, из них в ремонте {buildings_repair}</div>
        </>
    )
}

export default Details;