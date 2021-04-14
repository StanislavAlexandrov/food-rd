import React from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import '../styles/card.scss';
import Food from '../data/food.data';

const FoodCard = () => {
    return (
        <>
            <CardGroup>
                <Card style={{ width: '23rem', backgroundColor: '#cbe4f9' }}>
                    <Card.Img
                        variant="top"
                        src="img/breakfast.png"
                        style={{
                            maxHeight: '10vh',
                            maxWidth: '10vh',
                            alignSelf: 'center',
                        }}
                    />
                    <Card.Body>
                        <Card.Title
                            style={{ fontWeight: 'bold' }}
                            className="bg-light"
                        >
                            Завтрак
                        </Card.Title>
                        <Card.Header>
                            {Food.breakfast.complexCarbohydratesName}
                        </Card.Header>
                        <Card.Text>
                            {Food.breakfast.complexCarbohydrates.map((item) => (
                                <li>{item}</li>
                            ))}
                        </Card.Text>
                        <Card.Header>{Food.breakfast.fatsName}</Card.Header>
                        <Card.Text>
                            {Food.breakfast.fats.map((item) => (
                                <li>{item}</li>
                            ))}
                        </Card.Text>
                        <Card.Header>{Food.breakfast.proteinsName}</Card.Header>
                        <Card.Text>
                            {Food.breakfast.proteins.map((item) => (
                                <li>{item}</li>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem', backgroundColor: '#cdf5f6' }}>
                    <Card.Img
                        variant="top"
                        src="img/lunch.png"
                        style={{
                            maxHeight: '10vh',
                            maxWidth: '10vh',
                            alignSelf: 'center',
                        }}
                    />
                    <Card.Body>
                        <Card.Title
                            style={{ fontWeight: 'bold' }}
                            className="bg-light"
                        >
                            {Food.snack1.snack1Name}
                        </Card.Title>
                        <Card.Title
                            style={{ fontWeight: 'bold' }}
                            className="bg-light"
                        >
                            Вариант 1
                        </Card.Title>
                        <Card.Text>
                            {Food.snack1.snackA.map((item) => (
                                <li>{item}</li>
                            ))}
                        </Card.Text>
                        <Card.Title
                            style={{ fontWeight: 'bold' }}
                            className="bg-light"
                        >
                            Вариант 2
                        </Card.Title>
                        <Card.Text>
                            {Food.snack1.snackB.map((item) => (
                                <li>{item}</li>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem', backgroundColor: '#eff9da' }}>
                    <Card.Img
                        variant="top"
                        src="img/dinner.png"
                        style={{
                            maxHeight: '10vh',
                            maxWidth: '10vh',
                            alignSelf: 'center',
                        }}
                    />
                    <Card.Body>
                        <Card.Title
                            style={{ fontWeight: 'bold' }}
                            className="bg-light"
                        >
                            {Food.lunch.lunchName}
                        </Card.Title>
                        <Card.Text>
                            <Card.Header>{Food.lunch.proteinsName}</Card.Header>
                            {Food.lunch.proteins.map((item) => (
                                <li>{item}</li>
                            ))}
                            <Card.Header>
                                {Food.lunch.complexCarbohydratesName}
                            </Card.Header>
                            {Food.lunch.complexCarbohydrates.map((item) => (
                                <li>{item}</li>
                            ))}

                            <Card.Header>{Food.lunch.fiberName}</Card.Header>
                            {Food.lunch.fiber.map((item) => (
                                <li>{item}</li>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem', backgroundColor: '#f9ebdf' }}>
                    <Card.Img
                        variant="top"
                        src="img/lunch.png"
                        style={{
                            maxHeight: '10vh',
                            maxWidth: '10vh',
                            alignSelf: 'center',
                        }}
                    />
                    <Card.Body>
                        <Card.Title
                            style={{ fontWeight: 'bold' }}
                            className="bg-light"
                        >
                            {Food.snack2.snack2Name}
                        </Card.Title>
                        <Card.Title
                            style={{ fontWeight: 'bold' }}
                            className="bg-light"
                        >
                            Что-то из этого
                        </Card.Title>
                        <Card.Text>
                            {Food.snack2.snackA.map((item) => (
                                <li>{item}</li>
                            ))}
                        </Card.Text>
                        <Card.Title
                            style={{ fontWeight: 'bold' }}
                            className="bg-light"
                        >
                            Плюс что-то из этого
                        </Card.Title>
                        <Card.Text>
                            {Food.snack2.snackB.map((item) => (
                                <li>{item}</li>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem', backgroundColor: '#f9d8d6' }}>
                    <Card.Img
                        variant="top"
                        src="img/dinner.png"
                        style={{
                            maxHeight: '10vh',
                            maxWidth: '10vh',
                            alignSelf: 'center',
                        }}
                    />
                    <Card.Body>
                        <Card.Title
                            style={{ fontWeight: 'bold' }}
                            className="bg-light"
                        >
                            {Food.dinner.dinnerName}
                        </Card.Title>
                        <Card.Text>
                            <Card.Header>{Food.dinner.fiberName}</Card.Header>
                            {Food.dinner.fiber.map((item) => (
                                <li>{item}</li>
                            ))}
                            <Card.Header>
                                {Food.dinner.proteinsName}
                            </Card.Header>
                            {Food.dinner.proteins.map((item) => (
                                <li>{item}</li>
                            ))}
                            <Card.Header>{Food.dinner.extraName}</Card.Header>
                            {Food.dinner.extra.map((item) => (
                                <li>{item}</li>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </>
    );
};

export default FoodCard;
