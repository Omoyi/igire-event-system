import React from 'react';

type Event = {
  id: number;
  title: string;
  date: number;
  emoji: string;
  description: string;
};

type EventItemProps = {
  event: Event;
  openModal: (event: Event) => void;
};

const EventItem: React.FC<EventItemProps> = ({ event, openModal }) => {
  return (
    <div
      className="bg-pink-300 text-pink-900 text-xs rounded-full px-2 py-1 mb-1 flex items-center cursor-pointer hover:bg-pink-400"
      onClick={() => openModal(event)}
    >
      <span className="mr-1">{event.emoji}</span>
      <span className="truncate">{event.title}</span>
    </div>
  );
};

export default EventItem;