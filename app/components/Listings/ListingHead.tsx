"use client"

import { HeartButton } from "@/app/components/HeartButton"
import { SafeUser } from "@/app/types"
import Image from "next/image"
import React from "react"
import Slider from "react-slick"
import Heading from "../Heading"

interface ListingHeadProps {
    title: string
    imageSrc: string[]
    locationValue?: string
    id: string
    currentUser?: SafeUser | null
}

const ListingHead: React.FC<ListingHeadProps> = ({
    title,
    imageSrc,
    locationValue,
    id,
    currentUser
}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: "ease-in-out",
        arrows: false
    }

    return (
        <>
            <Heading title={title} subtitle="" />
            <div className="w-full h-[60vh] rounded-xl relative">
                <Slider {...settings}>
                    {imageSrc.map((src, index) => (
                        <Image
                            key={index}
                            alt={title}
                            src={src}
                            fill
                            className="object-cover w-full h-full rounded-xl"
                        />
                    ))}
                </Slider>
                <div className="absolute top-5 right-5">
                    <HeartButton listingId={id} currentUser={currentUser} />
                </div>
            </div>
        </>
    )
}

export default ListingHead