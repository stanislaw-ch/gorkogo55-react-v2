import React from "react";

import ShopInList from "./ShopInList";
import ShopFull from "./ShopInList";

export default function ListShops({
    shopsData,
    searchValue,
    hashTageSearch,
    selectShop
}) {
    return renderList(shopsData, searchValue, hashTageSearch, selectShop)
}

function isMatch(item1, item2) {
    return item1.toLowerCase().includes(item2.toLowerCase());
}

function filterItems(shopObj, searchVal) {
    var { title, keywords, description, category, number } = shopObj;
    return (
        isMatch(title, searchVal) ||
        isMatch(keywords, searchVal) ||
        isMatch(description, searchVal) ||
        isMatch(category, searchVal) ||
        Number(number) === Number(searchVal)
    );
}

function renderList(items, searchVal, hashTageSearch, selectShop) {
    var filteredItems = [...items].filter(item => filterItems(item, searchVal));
    if (filteredItems.length < 1 && searchVal !== "") {
        return <p>Ничего не найдено...</p>;
    } else if (filteredItems.length === 1) {
        var [shop] = filteredItems;
        return (
            <ShopFull
                hashTageSearch={hashTageSearch}
                number={shop.number}
                title={shop.title}
                description={shop.description}
                keywords={shop.keywords}
                phone={shop.phone}
                vk={shop.vk}
                instagram={shop.instagram}
                website={shop.website}
                route={shop.route}
            />
        );
    } else {
        return filteredItems.map(item => (
            <ShopInList
                onSelectShop={selectShop}
                key={Math.random()}
                number={item.number}
                title={item.title}
                description={item.description}
                keywords={item.keywords}
                logo={item.logo}
            />
        ));
    }
}
