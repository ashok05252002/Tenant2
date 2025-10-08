import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const CalendarPicker = ({ onSchedule }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const times = ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM', '06:00 PM'];

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === month;
      calendarDays.push(
        <div key={day} className="p-1">
          <button
            onClick={() => setSelectedDate(new Date(year, month, day))}
            className={`w-full h-10 rounded-full text-sm transition-colors ${
              isSelected ? 'bg-primary-500 text-white' : 'hover:bg-primary-100'
            }`}
          >
            {day}
          </button>
        </div>
      );
    }
    return calendarDays;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
      <h3 className="text-lg font-semibold text-secondary-900 mb-4">Schedule a Viewing</h3>
      
      {/* Calendar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-secondary-100"><ChevronLeft size={20} /></button>
          <span className="font-medium">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
          <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-secondary-100"><ChevronRight size={20} /></button>
        </div>
        <div className="grid grid-cols-7 text-center text-sm text-secondary-500">
          {daysOfWeek.map(day => <div key={day} className="py-2">{day}</div>)}
        </div>
        <div className="grid grid-cols-7">{renderCalendar()}</div>
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-secondary-700 mb-2">Available Times on {selectedDate.toLocaleDateString()}</h4>
          <div className="grid grid-cols-3 gap-2">
            {times.map(time => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedTime === time ? 'bg-primary-500 text-white' : 'bg-secondary-100 hover:bg-secondary-200'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Confirmation Button */}
      <button
        onClick={() => onSchedule({ date: selectedDate, time: selectedTime })}
        disabled={!selectedDate || !selectedTime}
        className="w-full flex items-center justify-center gap-2 bg-primary-500 text-white py-3 px-4 rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
      >
        <Clock size={18} />
        Confirm Viewing
      </button>
    </div>
  );
};

export default CalendarPicker;
