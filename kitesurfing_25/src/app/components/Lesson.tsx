'use client';
import React from 'react';
import Card from './Card';
import cardData from '../utils/cardData';

const Lesson = () => {
  return (
    <div className="p-4 py-10 md:px-6">
      <div className="text-center text-lg">
        <h3 className="text-primary pb-2 text-xl font-bold">Lesson pricing</h3>
        <p>All lesson include equipment plus instructions</p>
        <p>(recommended: 9 hours minimum for complete beginners)</p>
        <p>cash only in euros, usd, kes, gbp</p>
      </div>
      <div
        id="lesson"
        className="grid gap-7 py-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {cardData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Lesson;
