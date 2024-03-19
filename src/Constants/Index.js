import web from "../assets/web.jpeg"
import react from "../assets/reactjs.png"
 
import todo from "../assets/todo.png"
import html from '../assets/html5.png'
import css from '../assets/css.png'
import Js from '../assets/js.png'
import git from '../assets/git.png'
import reactjs from "../assets/reactjs.png"
import java from '../assets/java.png'
import shopping from '../assets/shopping.png'
import employeeMan from '../assets/employeeMan.png'

const services=[
    {
        title:"Web Developer",
        icon:web,
    },
    {
        title:"React Developer",
        icon:react,
    },
    {
        title:" Java Developer",
        icon:java,
    }
];
    const technologies=[
        {
          name:"Java",
          icon:java,
        },

        {
        name:"HTML 5",
        icon:html,
        },
        {
         name:"CSS 3",
         icon:css,
        },
        {
            name:"Javascript",
            icon:Js,
        },
        {
            name:"React",
            icon:reactjs,
        },
        {
            name:"Git",
            icon:git,
        }



    ];
    const projects=[
        {
            name:"ToDo App",
            description:
            " WEB Application that enables users to manage their daily task and to manage the time efficiently",

            tags:[
                {
                    name:"Javascript",
                    color:"blue-text-gradient",
                },
                {
                    name:"Reactjs",
                    color:"green-text-gradient",
                },
                {
                    name:"Bootstrap",
                    color:"pink-text-gradient",
                },

            ],
            image:todo,
            source_code_link:"https://github.com/Ashwini-P9/ToDoApp",
            source_deploy_link:"https://todoapp-3655f4.netlify.app/",

        },
        {
            name:"Shopping App",
            description:
            " WEB Application for Online shopping made using React and make it responsive Bootstrap  is used",

            tags:[
                {
                    name:"Javascript",
                    color:"blue-text-gradient",
                },
                {
                    name:"Reactjs",
                    color:"green-text-gradient",
                },
                {
                    name:"Bootstrap",
                    color:"pink-text-gradient",
                },

            ],
            image:shopping,
            source_code_link:"https://github.com/Ashwini-P9/ShoppingAppReact",
            source_deploy_link:"https://shopping-e3abda.netlify.app",

        },
        {    
            name:"Employee Management System",
            description:
            "This App allows easy data insertion,updating,deletion,and retrieval from the server,enabling CRUD operations.",
            tags:[
                {
                    name:"Javascript",
                    color:"blue-text-gradient",
                },
                {
                    name:"Reactjs",
                    color:"green-text-gradient",
                },
                {
                    name:"Bootstrap",
                    color:"pink-text-gradient",
                },

            ],
            image:employeeMan,
            source_code_link:"https://github.com/Ashwini-P9/EmployeeCRUD",
            source_deploy_link:"https://employeecrud-0f859.netlify.app/"
        }


    ];
    export {services,technologies,projects};
