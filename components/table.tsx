"use client"

import {useEffect, useState} from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';

import AddReservation from '@/components/addReservation';


export default function table(){
    const [ date, setDate ] = useState(new Date());
    const [firstDay, setFirstDay] = useState(new Date());
    const [lastDay, setLastDay] = useState(new Date());

    const [ isAddReservation, setIsAddReservation ] = useState(false);

    lastDay.setHours(0,0,0,0)
    firstDay.setHours(0,0,0,0)
    // const firstDay = new Date();
    // const lastDay = new Date();

    // const times = ['11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00']
    const times = [
        "13:00", "13:30",
        "14:00", "14:30",
        "15:00", "15:30",
        "16:00", "16:30",
        "17:00", "17:30",
        "18:00", "18:30",
        "19:00", "19:30",
        "20:00", "20:30",
        "21:00", "21:30",
        "22:00", "22:30",
        "23:00", "23:30",
        "00:00", "00:30",
        "01:00", "01:30",
        "02:00"
    ]
    const days = ["Monday",'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const reservation = [
        {
            name : "kanisorn",
            date : new Date("2025-06-16"),
            startTime : "13:00",
            endTime : "15:00",
            price : 0,
            duration : 2
        },
        {
            name : "kanisorn",
            date : new Date("2025-06-28"),
            startTime : "13:00",
            endTime : "15:00",
            price : 0,
            duration : 2
        },
        {
            name : "kanisorn",
            date : new Date("2025-06-22"),
            startTime : "13:00",
            endTime : "15:00",
            price : 0,
            duration : 2
        },
        {
            name : "kanisorn2",
            date : new Date("2025-06-21"),
            startTime : "13:30",
            endTime : "14:30",
            price : 0,
            duration : 1.5
        }
    ]

    const dayColor = {
        Monday : "bg-yellow-200",
        Tuesday : "bg-pink-200",
        Wednesday : "bg-green-200",
        Thursday : "bg-orange-200",
        Friday : "bg-blue-200",
        Saturday: "bg-purple-200",
        Sunday: "bg-red-200",
    }

    function reservationMap(time:string, day:string, timeIndex:number){
        const matching = reservation.find((res) =>{
            res.date.setHours(0,0,0,0)

            const resDay = res.date.toLocaleDateString("en-US", {weekday:"long"});
            return ( time >= res.startTime && time <= res.endTime) && resDay === day && res.date >= firstDay && res.date <= lastDay;
        })



        if(matching){

            const firstPartName = matching.name.slice(0,matching.name.length/2)
            const secondPartName = matching.name.slice(matching.name.length/2,matching.name.length)
            const firstPartDate = matching.date.toLocaleDateString("en-US",{month : "short", day : "2-digit"}).slice(0,matching.name.length/2)
            const secondPartDate = matching.date.toLocaleDateString("en-US",{month : "short", day : "2-digit"}).slice(matching.name.length/2,matching.name.length+1)


            const [hour, minute] = matching.startTime.split(":").map(Number)
            matching.date.setHours(hour,minute+30)
            const secondTime = String(matching.date.toLocaleTimeString("en-GB", {
                hour12:false,
                hour: '2-digit',
                minute: '2-digit'
            }));

            return (
                <div key={timeIndex} className={`border-gray-400 text-sm  ${dayColor[day as keyof typeof dayColor] || ""} ${time === matching.startTime ? "rounded-l-xl ml-1" : `${time === matching.endTime ? "rounded-r-xl mr-1" : ""}`}  h-20 border-b bg-black`}>
                    {matching.startTime === time && matching.endTime !== time &&
                        <div className="flex flex-col justify-center items-end">
                            <div className="font-semibold">{firstPartName}</div>
                            <div className="text-xs">{firstPartDate}</div>
                            <div className="text-xs">{matching.startTime} -</div>
                            <div className="text-xs">{matching.price}</div>
                        </div>
                    }{
                        secondTime === time &&
                    <div className="flex flex-col justify-center items-start">
                        <div className="font-semibold">{secondPartName}</div>
                        <div className="text-xs"> {secondPartDate}</div>
                        <div className="text-xs">{matching.endTime}</div>
                    </div>
                }
                </div>
            )
        }
        else{
            return (
                <div key={timeIndex} className={`h-20 border-b border-gray-400`}></div>
            )
        }
    }

    const handleAddReservation = () => {
        setIsAddReservation(true);
        console.log(isAddReservation);
    }




    useEffect(() => {

        const defaultFirstDay = new Date(date);
        const defaultLastDay = new Date(date);


        const day = date.getDay();
        const diffToMonday = day === 0 ? -6 : 1 - day;
        defaultFirstDay.setDate(date.getDate() + diffToMonday);

        const diffToSunday = day === 0 ? 0 : 7 - day;
        defaultLastDay.setDate(date.getDate() + diffToSunday);

        setFirstDay(defaultFirstDay)
        setLastDay(defaultLastDay)

        // console.log(defaultFirstDay.toLocaleDateString())
        // console.log(defaultLastDay.toLocaleDateString());

        console.log(firstDay)
        console.log(lastDay)

    }, [date])

    return (
        <div className="grid grid-rows-12 h-screen">
            <div className="row-span-2 bg-gray-200">
                <div className="flex flex-col  pt-2 pl-3 pb-3 space-y-2">
                    <div className="flex flex-row justify-center text-xl font-bold">Reservation Table</div>
                    <div className="flex flex-row justify-center text-md font-semibold">{firstDay.toLocaleDateString().slice(0,16)} - {lastDay.toLocaleDateString().slice(0,16)}</div>
                    <div className="space-x-2">
                        {/*<button className=" sm:py-2 sm:px-3 md:py-3 md:px-4 rounded-lg text-sm font-semibold">*/}
                            {/*<div>SELECT DATE</div>*/}
                            {/*<div>*/}
                            {/*    <svg className="w-6 h-5 text-white dark:text-white" aria-hidden="true"*/}
                            {/*         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"*/}
                            {/*         viewBox="0 0 24 24">*/}
                            {/*        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
                            {/*              strokeWidth="2"*/}
                            {/*              d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>*/}
                            {/*    </svg>*/}
                            {/*</div>*/}
                        {/*</button>*/}

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={dayjs(date)}
                                onChange={(newValue) => {
                                    setDate(newValue?.toDate() || date);
                                }}
                                slotProps={{
                                    textField: {
                                        variant: 'outlined',
                                        InputProps: {
                                            sx: {
                                                backgroundColor: 'black',
                                                color: 'white',
                                                fontWeight: 600, // font-semibold
                                                fontSize: '0.875rem', // text-sm
                                                borderRadius: '0.5rem', // rounded-lg
                                                height : 44,
                                                marginRight : 1,
                                            },
                                        },
                                        InputLabelProps: {
                                            sx: {
                                                color: 'white',
                                            },
                                        },
                                        sx: {
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'white',
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'white',
                                            },
                                            '& .MuiSvgIcon-root': {
                                                color: 'white',
                                            },
                                        },
                                    },
                                }}
                            />
                        </LocalizationProvider>
                        <button
                            className="bg-black text-white sm:py-2 sm:px-3 md:py-3 md:px-4 rounded-lg text-sm font-semibold "
                            onClick={handleAddReservation}
                        >Add Reservation
                        </button>
                        <button
                            className="bg-black text-white sm:py-2 sm:px-3 md:py-3 md:px-4 rounded-lg text-sm font-semibold ">Save
                            PNG
                        </button>
                        <button
                            className="bg-black text-white sm:py-2 sm:px-3 md:py-3 md:px-4 rounded-lg text-sm font-semibold ">View
                            ALL
                        </button>
                    </div>
                </div>
            </div>
            <div className="row-span-10 bg-gray-100 ">
                <div className="grid grid-cols-[130px_repeat(27,1fr)] grid-rows-[repeat(8,auto)]">
                    <div className="border border-gray-400 text-sm font-semibold">Days</div>
                    {times.map((time,timeIndex) => {

                        if(!time.includes("30")){
                            return (
                                <div key={timeIndex} className="border-t border-b border-gray-400 text-center text-sm font-semibold py-2">
                                    {time}
                                </div>
                            )
                        }else{
                            return (
                                <div key={timeIndex} className="border-t border-b border-gray-400 text-center items-center text-sm font-semibold py-2">
                                    -
                                </div>
                            )
                        }
                    })}
                    {days.map((day, index) => (
                        <>
                            <div key={day} className={` ${dayColor[day as keyof typeof dayColor] || ""}
                            font-semibold border-b border-l border-r border-gray-400`}>
                                {day}
                            </div>
                            {times.map((time, timeIndex) =>{
                                if(!time.includes("30")) {
                                    return reservationMap(time,day,timeIndex)
                                }else{
                                    return (reservationMap(time,day,timeIndex))
                                }
                            })}
                        </>
                    ))}
                </div>
            </div>

            {isAddReservation &&
                <div className="fixed inset-0 flex items-center justify-center z-50 h-screen bg-gray-200/75e shadow-xs">
                    <AddReservation setIsAddReservation={setIsAddReservation} />
                </div>
            }

        </div>
    )
}