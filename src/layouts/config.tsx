import Bar from "../assets/icons/Bar"
import Edu from "../assets/icons/Edu"
import Rentencle from "../assets/icons/Rentencle"

export const navConfig: any = [
    {
        title: "Dashboard",
        icon: <div className="w-[20px]"><Bar /></div>,
        link: ""
    },
    {
        title: "Education",
        icon: <div className="w-[20px]"><Edu /></div>,
        link: ""
    },
    {
        title: "Resources",
        icon: <div className="w-[20px]"><Edu /></div> ,
        childrens: [
             {
                title:"navProduct",
                 icon : <div className="w-1 h-1 "></div>,
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