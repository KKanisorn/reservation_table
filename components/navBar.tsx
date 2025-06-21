"use client";

type NavBarProps = {
    setNavClick : React.Dispatch<React.SetStateAction<boolean>>;
}

export default function navBar({setNavClick}:NavBarProps){

    return (
        <div className="flex sm:flex-row md:flex-col lg:flex-col justify-start items-center pt-5 gap-5 md:h-screen sm:w-screen md:w-auto">
            <button className="hover:bg-gray-400 w-full flex flex-row justify-center py-3 duration-500"
            onClick={() => setNavClick(prev => !prev)}
            >
                <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                </svg>
            </button>
            <button className="hover:bg-gray-300 w-full flex flex-row justify-center py-3 duration-500">
                <svg className="w-7  h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"/>
                </svg>
            </button>
        </div>
    );
}