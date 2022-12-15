import Bar from "../assets/icons/Bar"
import Edu from "../assets/icons/Edu"

export const navConfig: any = [
    {
        title: "Dashboard",
        icon: <div className="w-[20px]"><Bar /></div>,
        link: ""
    },
    {
        title: "Education",
        icon:  <div className="w-[20px]"><Edu/></div>,
        link: ""
    },
    {
        title: "Resources",
        icon: "bi-gear-fill",
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
        icon: "bi-gear-fill",
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
        icon: "bi-gear-fill",
        childrens: [
             {
                title:"navProduct",
                 icon : "",
                 link : "",
            },

        ]
    },
]