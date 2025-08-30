"use client";

import React, { useState } from "react";
import EventItem from './EventItem'; 

const Calendar = () => {
    //The day of the week array in short form
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   
    //Capturing today's date and all the good stuff
    const today = new Date();
    const month = today.getMonth() //In js months are 0 indexed & day 0 is the last day of the previous month
    const year = today.getFullYear()
    const currentDay = today.getDate(); //Getting the current day so I can distinguish it from other days

    //Typescript was giving me a hard time so I had to satisfy it
    type Event = {
       id: number;
       title: string;
       date: number;
       emoji: string;
       description: string;
    };

    //Just for design testing: dummy events with my chosen editable data structure: emojis, title and descriptions
    const events: Event[] = [
       { id: 1, title: 'Inteview Meeting', date: 31, emoji: '👩🏽‍💻', description: 'Discuss how I am a good fit as a facilitator.' },
       { id: 2, title: 'Calendar Deadline', date: 30, emoji: '⏰', description: 'Final submission for the Igire calendar app.' },
       { id: 3, title: 'Sync Call', date: 20, emoji: '📲', description: 'Review progress with the supervisor.' },
       { id: 4, title: 'Salary Day', date: 29, emoji: '💰', description: 'Getting paid for my hard work.' },
    ];

    //Most neat way from AI but I could have also used an array with actual days in months [31, 28, etc...] but it was longer. 
    const monthDays = new Date(year, month +1, 0).getDate(); //year of interest:today, next month, last day of the current month
    const monthFirstDay = new Date(year, month, 1).getDay();

    //Capturing all days in an array (due to typescripts strictness I had to add the type annotation to explain the array c nbrs/nulls)
    const days: (number | null)[] = Array.from({ length: monthFirstDay }, () => null); // Fill with nulls the first few days
    for (let i = 1; i <= monthDays; i++) {
        days.push(i);
    }

    //Managing the state of the event modal
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    //Adding functions to close and open the modal with the selected event data
    const openModal = (event: Event) => {
      console.log('Event clicked:', event);
      setSelectedEvent(event);
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedEvent(null);
    };
    
    return (
    <div className="p-4 bg-purple-200 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="text-center text-4xl font-extrabold mb-6 text-purple-800">
        {new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center font-bold text-pink-600">
        {weekDays.map(day => (
          <div key={day} className="py-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div
            key={index}
            className={`p-4 border rounded-lg cursor-pointer transition-colors duration-200 ease-in-out ${
              day && day === currentDay && today.getMonth() === month && today.getFullYear() === year
                ? 'bg-pink-500 text-white font-extrabold border-pink-500'
                : day
                  ? 'border-pink-300 hover:bg-pink-100 bg-white'
                  : 'border-transparent'
            }`}
          >
            {day}
            {day && (
              <div className="mt-2 text-left">
                {events.filter(event => event.date === day).map(event => (
                  <EventItem key={event.id} event={event} openModal={openModal} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
            <h2 className="text-xl font-bold mb-2">{selectedEvent.title}</h2>
            <p className="text-gray-600 mb-4">{selectedEvent.description}</p>
            <button
              onClick={closeModal}
              className="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
