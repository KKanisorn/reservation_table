"use client";

type AddReservationProps = {
   setIsAddReservation : React.Dispatch<React.SetStateAction<boolean>>;
}

export default function addReservation({setIsAddReservation}:AddReservationProps){

    const handleIsAddReservation = () => {
        setIsAddReservation(false)
    }

    return(
        <div className="bg-white w-full max-w-md min-h-100 h-fit rounded-lg">
            <div className="relative ">
                <button onClick={handleIsAddReservation} className="absolute top-2 right-2 cursor-pointer">
                    <svg className="w-6 h-6 text-gray-800 " aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M6 18 17.94 6M18 18 6.06 6"/>
                    </svg>
                </button>
            </div>
            <div className="mt-8 ml-4 mr-4">
                ttt
            </div>
        </div>
    )
}