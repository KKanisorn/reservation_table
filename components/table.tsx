import {useEffect, useState} from "react";


export default function table(){
    const [ date, setDate ] = useState(new Date());
    const [ firstDay, setFirstDay] = useState(new Date());
    const [ lastDay, setLastDay] = useState(new Date());

    // const times = ['11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00']
    const times = [
        "11:00", "11:30",
        "12:00", "12:30",
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
        "02:00", "02:30",
        "03:00"
    ]
    const days = ["Monday",'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const reservation = [
        {
            name : "kanisorn",
            date : new Date("2025-06-22"),
            startTime : "11:00",
            endTime : "13:00",
        },
        {
            name : "kanisorn2",
            date : new Date("2025-06-21"),
            startTime : "11:30",
            endTime : "13:00",
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
            const resDay = res.date.toLocaleDateString("en-US", {weekday:"long"});
            return ( time >= res.startTime && time <= res.endTime)  && resDay === day;
        })
        if(matching){
            console.log("Match From Function")
            return (
                <div key={timeIndex} className={`border-gray-400 text-sm  ${dayColor[day as keyof typeof dayColor] || ""} h-20 border-b bg-black`}>
                    {matching.startTime === time && <div>{matching.name}</div>}
                </div>
            )
        }
        else{
            return (
                <div key={timeIndex} className={`h-20 border-b border-gray-400`}></div>
            )
        }
    }




    useEffect(() => {
        // console.log(date.getDay())
        // console.log(date.getDate()-date.getDay())
        // console.log(date.getMonth())
        // console.log(date.getDate()+date.getDay())

        firstDay.setDate(date.getDate()-date.getDay())
        lastDay.setDate(date.getDate()+(6-date.getDay()))
        console.log(firstDay)
        console.log(lastDay);
    })

    return (
        <div className="grid grid-rows-12 h-screen">
            <div className="row-span-2 bg-gray-200">
                <div className="flex flex-col  pt-2 pl-3 pb-3 space-y-2">
                    <div className="flex flex-row justify-center text-xl font-bold">Reservation Table</div>
                    <div className="flex flex-row justify-center text-md font-semibold">{firstDay.toUTCString().slice(0,16)} - {lastDay.toUTCString().slice(0,16)}</div>
                    <div className="space-x-2">
                        <button className="bg-black text-white sm:py-2 sm:px-3 md:py-3 md:px-4 rounded-lg text-sm font-semibold inline-flex space-x-1">
                            <div>SELECT DATE</div>
                            <div>
                                <svg className="w-6 h-5 text-white dark:text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                                </svg>
                            </div>
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
                <div className="grid grid-cols-[200px_repeat(33,1fr)] grid-rows-[repeat(8,auto)]">
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

                        // if(!time.includes("30")){
                        //     return (
                        //         <div key={timeIndex} className="border text-center">
                        //             {time}
                        //         </div>
                        //     )
                        // }
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
        </div>
    )
}