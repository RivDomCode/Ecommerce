import { useEffect, useState } from "react";

export const useGetDataFromAPI = (url) => {
    //Save product Info
    const [products, setProducts] = useState([]);
    //get productData form API
    const getDataFromAPI = async () => {
        const url = "https://api.escuelajs.co/api/v1/products";
        const resp = await fetch(url);
        const data = await resp.json();

        const objectData = data.map((object) => {
            return {
                id: object.id,
                category: object.category.name,
                image: object.category.image,
                title: object.title,
                price: object.price,
                description: object.description,
            };
        });
        setProducts(objectData);
    };

    useEffect(() => {
        getDataFromAPI();
    }, []);

    return products;
}