import React from "react";
import EventCard from "./Card/EventCard";

const Events = () => {
  const data = [
    {
      day: "02",
      month: "Dec",
      year: "2020",
      title: "How to speak like a native speaker?",
      bgColor: "bg-cyan-600",
    },
    {
      day: "02",
      month: "Dec",
      year: "2020",
      title: "How to speak like a native speaker?",
      bgColor: "bg-yellow-500",
    },
    {
      day: "02",
      month: "Dec",
      year: "2020",
      title: "How to speak like a native speaker?",
      bgColor: "bg-blue-600",
    },
  ];
  return (
    <section>
      <div className="mx-auto w-10/12">
        <h1 className="mb-8 text-center text-4xl font-semibold">
          Recent Events
        </h1>
        <div className="mx-auto max-w-3xl">
          <p className="mb-8 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            minus ipsa tenetur, eveniet aspernatur doloremque.
          </p>

          <div className="flex flex-col gap-4">
            {data.map((event, index) => (
              <EventCard
                key={index}
                day={event.day}
                month={event.month}
                year={event.year}
                title={event.title}
                bgColor={event.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
