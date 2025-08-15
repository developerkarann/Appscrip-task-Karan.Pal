'use client'
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Heart, Check, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductsSection({ products }) {
    const [showFilter, setShowFilter] = useState(true);
    const [activeFilter, setActiveFilter] = useState(null);
    const [sortOpen, setSortOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState("RECOMMENDED");

    const filters = [
        { title: "CUSTOMIZABLE", type: "checkbox" },
        {
            title: "IDEAL FOR",
            options: ["Unselect all", "Men", "Women", "Baby & Kids"],
        },
        {
            title: "OCCASION",
            options: ["Unselect all", "Men", "Women", "Baby & Kids"],
        },
        {
            title: "WORK",
            options: ["Unselect all", "Men", "Women", "Baby & Kids"],
        },
        {
            title: "FABRIC",
            options: ["Unselect all", "Men", "Women", "Baby & Kids"],
        },
        {
            title: "SEGMENT",
            options: ["Unselect all", "Men", "Women", "Baby & Kids"],
        },
        {
            title: "SUITABLE FOR",
            options: ["Unselect all", "Men", "Women", "Baby & Kids"],
        },
        {
            title: "RAW MATERIALS",
            options: ["Unselect all", "Men", "Women", "Baby & Kids"],
        },
        {
            title: "PATTERN",
            options: ["Unselect all", "Men", "Women", "Baby & Kids"],
        },
    ];


    const sortOptions = [
        "RECOMMENDED",
        "NEWEST FIRST",
        "POPULAR",
        "PRICE : HIGH TO LOW",
        "PRICE : LOW TO HIGH",
    ];

    return (
        <section className="max-w-7xl mx-auto py-6 ">
            {/* Header  >>*/}
            <div className="flex justify-between items-center mb-4 border-y border-gray-300 py-4 px-2 ">
                <div className="flex items-center  space-x-2 hidden md:block">
                    <span className="text-sm font-medium">{products?.length} ITEMS</span>
                    <button
                        onClick={() => setShowFilter(!showFilter)}
                        className="text-sm text-gray-500 underline ml-20  hover:cursor-pointer "
                    >
                        {/* {showFilter ? <ChevronRight /> : <ChevronLeft />} */}
                        {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
                    </button>
                </div>

                <div className="flex items-center space-x-2 block md:hidden">
                    <button
                        className="text-base "
                    >
                        FILTER
                    </button>
                </div>

                {/* Sort Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setSortOpen(!sortOpen)}
                        className="text-sm flex items-center space-x-1"
                    >
                        <span>{selectedSort}</span>
                        <ChevronDown className="w-4 h-4" />
                    </button>
                    {sortOpen && (
                        <div className="absolute right-0 mt-2 bg-white border shadow-lg text-sm z-20 w-48">
                            {sortOptions.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => {
                                        setSelectedSort(option);
                                        setSortOpen(false);
                                    }}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
                                >
                                    <span>{option}</span>
                                    {selectedSort === option && <Check className="w-4 h-4" />}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex gap-6 px-3">
                {/* Filter >>> */}
                <aside
                    className={` hidden md:block transition-all duration-300 overflow-hidden ${showFilter ? "w-64 opacity-100" : "w-0 opacity-0"
                        }`}
                >
                    <div className="pr-4">
                        {filters.map((filter, idx) => (
                            <div key={idx} className="border-b py-2">
                                {filter.type === "checkbox" ? (
                                    <label className="flex items-center space-x-2 text-sm">
                                        <input type="checkbox" className="border-gray-400" />
                                        <span>{filter.title}</span>
                                    </label>
                                ) : (
                                    <div>
                                        <button
                                            className="flex justify-between items-center w-full text-sm"
                                            onClick={() =>
                                                setActiveFilter(activeFilter === idx ? null : idx)
                                            }
                                        >
                                            <span>{filter.title}</span>
                                            {activeFilter === idx ? (
                                                <ChevronUp className="w-4 h-4" />
                                            ) : (
                                                <ChevronDown className="w-4 h-4" />
                                            )}
                                        </button>
                                        <div
                                            className={`transition-all duration-300 overflow-hidden ${activeFilter === idx ? "max-h-40 mt-2" : "max-h-0"
                                                }`}
                                        >
                                            {filter.options && (
                                                <ul className="pl-2 space-y-1 text-sm text-gray-600">
                                                    {filter.options.map((opt, i) => (
                                                        <li key={i} className="flex items-center space-x-2">
                                                            <input
                                                                type="checkbox"
                                                                id={`${filter.title}-${i}`}
                                                                className="border-gray-400"
                                                            />
                                                            <label
                                                                htmlFor={`${filter.title}-${i}`}
                                                                className="cursor-pointer hover:underline"
                                                            >
                                                                {opt}
                                                            </label>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </aside>


                {/* Products List >> */}
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products?.map((product) => (
                        <div key={product.id} className="relative group hover:scale-105  transition duration-300 cursor-pointer">
                            {product.tag && (
                                <span className="absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 border">
                                    {product.tag}
                                </span>
                            )}
                            <img
                                src={product.image}
                                alt={product.name}
                                width={300}
                                height={300}
                                className="w-full h-auto"
                            />
                            <div className="mt-2 text-sm font-medium">{product.name}</div>
                            <div className="flex gap-2">
                                <div className="text-xs text-gray-500">
                                    {product?.title?.slice(0,30)}...
                                </div>
                                <button className=" ">
                                    <Heart className="w-5 h-5 text-gray-500 cursor-pointer" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
