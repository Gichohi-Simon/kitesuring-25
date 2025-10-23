'use client';
import React from 'react';
import Card from './Card';
import { CardData } from '../utils/types';

const Lesson = () => {
  const cardData: CardData[] = [
    {
      id: 0,
      title: '1 on 1 kite lesson',
      bg_img: '/images/clients.jpeg',
      package_name: 'Package 1',
      description: 'from hero to zero',
      explainer: {
        title:
          'For this choice you get personalized one on one training session.',
        details: ['€70 Hourly lessons.', '€90 2Hrs Lesson', '€120 3Hrs Lesson'],
      },
    },
    {
      id: 1,
      title: '1 on 1 kite lesson',
      bg_img: '/images/instructions.jpeg',
      package_name: 'Package 2',
      description: 'lessons (2 pax per instructor)',
      explainer: {
        title:
          'you get to share a trainer with another trainee thereby saving training cost',
        details: [
          '€300 9Hrs Lessons Package - 3 Days.',
          '€360 12Hrs Lesson Package -  4 Days.',
          '€450 15 Hrs Lesson Package - 6 Days',
        ],
      },
    },
    {
      id: 2,
      title: 'kite equipment for rental',
      bg_img: '/images/gallery/instructor_walking.jpeg',
      package_name: 'Package 3',
      description: '(cash payable in advance)',
      explainer: {
        title:
          'For this choice you get a personalized one on one training session',
        details: [
          '€30 1 Hour Full Rig',
          '€60 Half Day (3Hrs) Full Rig',
          '€100 Daily (6Hrs) Full Rig',
          '€500 7 Days (3Hrs) Full Rig',
          '€10 Hour Board Only',
          '€20 Half a Day Board Only',
          '€50 Daily Board Only',
          '€200 A week Board Only',
        ],
      },
    },
  ];
  return (
    <div className="p-4 py-10">
      <div className="text-center text-lg">
        <h3 className="text-primary text-xl font-bold">Lesson pricing</h3>
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
