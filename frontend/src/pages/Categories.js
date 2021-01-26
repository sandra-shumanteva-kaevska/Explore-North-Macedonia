import React from "react"

import { CategoryCard } from "../components/CategoryCard"

export const Categories = () => {
    const categories = [
        {
            category: "Hiking Tour",
            image: "http://localhost:8080/images/categories/hiking.jpg",
            alt: "Man is hiking in forest",
            id: "hiking-tours"
        },
        {
            category: "Biking Tour",
            image: "http://localhost:8080/images/categories/biking.jpg",
            alt: "Bikers on mountain",
            id: "biking-tours"
        },
        {
            category: "Culture Tour",
            image: "http://localhost:8080/images/categories/culture.jpg",
            alt: "National Macedonian",
            id: "culture-tours"
        }
    ]
    return <>
        <section>
            {categories.map((category) =>
                <CategoryCard key={category.id} {...category} />
            )}
        </section>
    </>
}