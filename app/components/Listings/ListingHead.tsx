"use client"

import React from "react"
import Image from "next/image"

import {SafeUser} from "@/app/types"
import useCountries from "@/app/hooks/useCountries"
import Heading from "../Heading"
import {HeartButton} from "@/app/components/HeartButton"

interface ListingHeadProps {
    title: string
    imageSrc: string
    locationValue: string
    id: string
    currentUser?: SafeUser | null
}

const ListingHead: React.FC<ListingHeadProps> = (
    {
        title,
        imageSrc,
        locationValue,
        id,
        currentUser
    }) => {
    const {getByValue} = useCountries()
    const location = getByValue(locationValue)

    return (
        <>
            <Heading
                title={title}
                subtitle={`${location?.label},${location?.region}`}
            />
            <div className="
                    w-full
                    h-[60vh]
                    overflow-hidden
                    rounded-xl
                    relative
            "
            >
                <Image
                    alt={title}
                    src={imageSrc}
                    fill
                    className="object-hover w-full"
                />
                <div className="absolute top-5 right-5">
                    <HeartButton
                        listingId={id}
                        currentUser={currentUser}
                    />
                </div>
            </div>
        </>
    )
}
export default ListingHead