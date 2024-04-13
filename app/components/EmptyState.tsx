"use client"

import React from "react"
import {useRouter} from "next/navigation"

import Heading from "./Heading"
import {Button} from "./Button"

interface EmptyState {
    title?: string
    subtitle?: string
    showReset?: boolean
}

export const EmptyState: React.FC<EmptyState> = (
    {
        title = "No Exact Matches",
        subtitle = "Try Changing or Removing Some of Your Filters",
        showReset
    }) => {
    const router = useRouter()

    return (
        <div className="
            h-[60vh]
            flex
            flex-col
            gap-2
            justify-center
            items-center
        ">
            <Heading
                title={title}
                subtitle={subtitle}
                center
            />
            <div className="w-48 mt-4">
                {showReset && (
                    <Button
                        outline
                        label="Remove all filters"
                        onClick={() => router.push("/")}

                    />
                )}
            </div>
        </div>
    )
}


export default EmptyState