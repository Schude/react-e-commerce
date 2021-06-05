import React from "react";
import { Container, ListItem, CategoryList } from "./styles";
const Categories = ({ categories, click }) => {
    const handleClick = (e) => {
        click(e.target.id);
    };
    return (
        <Container>
            <CategoryList>
                {categories &&
                    categories.map((category, i) => (
                        <ListItem onClick={handleClick} id={category} key={i}>
                            {" "}
                            {category}{" "}
                        </ListItem>
                    ))}
            </CategoryList>
        </Container>
    );
};

export default Categories;
