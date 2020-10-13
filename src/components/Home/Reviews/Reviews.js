import React from 'react';
import Review from '../Review/Review';

const Reviews = () => {

    const review = [
        {
            id: 0,
            image: 'https://i.imgur.com/cKgoI6L.png',
            name: "Nash Patrik",
            title: "CEO, Manpol",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum incidunt nihil id, rem explicabo maiores repudiandae?"
        },
        {
            id: 1,
            image: 'https://i.imgur.com/GZAjUAA.png',
            name: "Miriam Barron",
            title: "CEO, Manpol",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum incidunt nihil id, rem explicabo maiores repudiandae?"
        },
        {
            id: 2,
            image: 'https://i.imgur.com/EmDixVd.png',
            name: "Bria Malone",
            title: "CEO, Manpol",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum incidunt nihil id, rem explicabo maiores repudiandae?"
        }

    ]

    return (
        <section style={{ margin: 200 }}>

            <div className="container">
                <div>
                    <h1 className="text-center">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h1>
                </div>

                <div className="card-deck mt-5">
                    {
                        review.map(reviewData => <Review reviewData={reviewData} key={reviewData.id}></Review>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Reviews;