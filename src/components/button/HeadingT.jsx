import {
    FaBeer

} from "react-icons/fa";
//   import { FaBeer, FaBeer, FaBeer, FaBeer } from "react-icons/fa";

import Button from './Button'
import Redbutton from "./Redbutton";

export default function HeadingT() {
    return (
        <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl capitalize font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    ashiful islam
                </h2>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        <FaBeer aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                        Full-time
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        <FaBeer aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                        Remote
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        <FaBeer aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                        $120k &ndash; $140k
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        <FaBeer aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                        Closing on January 9, 2020
                    </div>
                </div>
            </div>
            <div className="mt-5 flex lg:ml-4 lg:mt-0">
                <span className="hidden sm:block">
                    <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                        <FaBeer aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" />
                        Edit
                    </button>
                </span>

                <span className="ml-3 hidden sm:block">
                < Button/>
                </span>

                <span className="sm:ml-3">
                   < Button/>
                   < Redbutton/>
                </span>

                {/* Dropdown */}
                <FaBeer as="div" className="relative ml-3 sm:hidden">
                    <FaBeer className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
                        More
                        <FaBeer aria-hidden="true" className="-mr-1 ml-1.5 h-5 w-5 text-gray-400" />
                    </FaBeer>

                    <FaBeer
                        transition
                        className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                        <FaBeer>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                Edit
                            </a>
                        </FaBeer>
                        <FaBeer>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                View
                            </a>
                        </FaBeer>
                    </FaBeer>
                </FaBeer>
            </div>
        </div>
    )
}
