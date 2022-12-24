import React from 'react'
import myanmar from '../assets/myanmar-flag-icon.svg'
import english from '../assets/united-kingdom-flag-icon.svg'


export const allLangs = [
    {
        label: "english",
        value: "en",
        icon: english
    },
    {
        label: "myanmar",
        value: "mm",
        icon: myanmar
    },
]

export const defaultLang = allLangs[0]