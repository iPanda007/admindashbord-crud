import Bar from "../assets/icons/Bar"
import Edu from "../assets/icons/Edu"
import Rentencle from "../assets/icons/Rentencle"

export const navConfig: any = [
    {
        title: "Dashboard",
        icon: <div className="w-[20px]"><Bar /></div>,
        link: "/dashboard"
    },
    {
        title: "Education",
        icon: <div className="w-[20px]"><Edu /></div>,
        link: "/dashboard/education"
    },
    {
        title: "Resources",
        icon: <div className="w-[20px]"><Edu /></div> ,
        childrens: [
             {
                title:"navProduct",
                 icon : "",
                 link : "",
            },
               {
                title:"navProduct",
                 icon : "",
                 link : "",
            },
                     {
                title:"navProduct",
                 icon : "",
                 link : "",
            },


        ]
    },
    {
        title: "Education",
        icon: <div className="w-[20px]"><Edu /></div>,
        childrens: [
             {
                title:"navProduct",
                 icon : "",
                 link : "",
            },

        ]
    },
    {
        title: "Dashboard",
        icon: <div className="w-[20px]"><Edu /></div> ,
        childrens: [
             {
                title:"navProduct",
                 icon : "",
                 link : "",
            },

        ]
    },
]