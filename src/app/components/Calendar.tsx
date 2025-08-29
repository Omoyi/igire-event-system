import React from "react";

const Calendar = () => {
    //The day of the week array in short form
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   
    //Capturing today's date and all the good stuff
    const today = new Date();
    const month = today.getMonth() //In js months are 0 indexed & day 0 is the last day of the previous month
    const year = today.getFullYear()
    const currentDay = today.getDate(); //Getting the current day so I can distinguish it from other days


    //An array of dummy events with my chosen editable data structure: emojis, title and descriptions
    const events = [
       { id: 1, title: 'Inteview Meeting', date: 31, emoji: '👥', description: 'Discuss how I am a good fit as a facilitator.' },
       { id: 2, title: 'Calendar Deadline', date: 30, emoji: '🚀', description: 'Final submission for the Igire calendar app.' },
       { id: 3, title: 'Sync Call', date: 20, emoji: '📞', description: 'Review progress with the supervisor.' },
       { id: 4, title: 'Salary Day', date: 29, emoji: '💰', description: 'Getting paid for my hard work.' },
    ];

    //Most neat way but I could have used an array with actual days in months [31, 28, etc...] the 
    const monthDays = new Date(year, month +1, 0).getDate(); //year of interest:today, next month, last day of the current month
    const monthFirstDay = new Date(year, month, 1).getDay();

    //Capturing all days in an array (due to typescripts strictness I had to add the type annotation to explain the array c nbrs/nulls)
    const days: (number | null)[] = Array.from({ length: monthFirstDay }, () => null); // Fill with nulls the first few days
    for (let i = 1; i <= monthDays; i++) {
        days.push(i);
    }

    return (
        <div className="p-4">
            <div className="text-center text-xl font-bold mb-4">
                {new Date(year, month).toLocaleString('default', {month: 'long', year: 'numeric'})}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center font-bold text-gray-600">
                {weekDays.map(day => (
                    <div key={day} className="py-2">
                        {day}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => (
                    <div key={index} 
                    className={`p-4 border rounded-lg cursor-pointer transition-colors duration-200 ease-in-out ${
                    //distinguishing today's day for an informed calendar 
                    day && day === currentDay && today.getMonth() === month && today.getFullYear() === year
                      ? 'bg-pink-500 text-white font-extrabold'
                      : day
                        ? 'border-pink-300 hover:bg-pink-100 bg-white'
                        : 'border-transparent'
                    }`}>
                        {day}
                        {day && (
                            <div className="mt-2 text-left">
                                {events.filter(event => event.date === day).map(event => (
                                    <div key={event.id} className="bg-pink-300 text-xs rounded-full pz-2 py-1 mb-1 flex items-center">
                                        <span className="mr-1">{event.emoji}</span>
                                        <span className="truncate">{event.title}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
