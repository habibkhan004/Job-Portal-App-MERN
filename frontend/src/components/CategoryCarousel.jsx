import React, { useRef } from 'react';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';
import { Input } from 'postcss';

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer"
];

const CategoryMarquee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const marqueeRef = useRef(null); // 🔹 Ref to control marquee

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  const handleMouseEnter = () => {
    marqueeRef.current?.stop(); // ✅ Stop marquee
  };

  const handleMouseLeave = () => {
    marqueeRef.current?.start(); // ✅ Resume marquee
  };

  return (
    <div className="w-full flex justify-center my-20  text-[#111111]">
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="10"
        className="max-w-xl"
        ref={marqueeRef} // 🟢 Apply ref
        onMouseOver={handleMouseEnter}
        onMouseOut={handleMouseLeave}
      >
        {category.map((cat, index) => (
          <Button
            key={index}
            onClick={() => searchJobHandler(cat)}
            onMouseEnter={handleMouseEnter} // 🟢 Stop on hover button
            onMouseLeave={handleMouseLeave} // 🟢 Resume on leave
            variant="outline"
            className="rounded-full mx-2  bg-[#FF6B00] text-white hover:bg-[#e55a00]"


          >
            {cat}
          </Button>
        ))}
      </marquee>
    </div>
  );
};

export default CategoryMarquee;
