import React from "react";
import { Link } from "react-router-dom";
import CourseComponent from "../../components/CourseComponent";
import { Fab, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
const DUMMY_VIDEO = [
    {
        id: 1,
        course: "Introduction",
        slug: "introduction",
        level: "beginner",
        soft: "capture",
        video: [
            {
                id: 1,
                slug: "Install",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 2,
                slug: "Security",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 3,
                slug: "Cabinet Manager",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 4,
                slug: "Files",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 5,
                slug: "File Viewer",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 6,
                slug: "Advanced Search",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 7,
                slug: "Audit log",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 8,
                slug: "Workflow",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 9,
                slug: "Inbox",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 10,
                slug: "Configuration overview",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 11,
                slug: "Dokmee Hub &Tools",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 12,
                slug: "File Retention",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 13,
                slug: "Active Directrory",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
        ],
        about:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ea sequi dolorum quam? Alias quaerat cum aperiam magni provident molestias.",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nulla facere voluptates non illo a ducimus cupiditate dolorem odio qui, atque explicabo accusantium. Amet, totam, rem distinctio dicta praesentium alias eveniet maiores quisquam officia ipsam nesciunt aliquam, sapiente commodi nam impedit eum maxime sint quis consectetur explicabo. Facilis suscipit esse nulla placeat, illo, non magnam, illum officiis quidem repellendus modi? Eaque accusantium voluptatibus sequi odit temporibus? Facere cumque sint fugit voluptatem labore hic, a asperiores accusantium doloremque ipsam nisi neque inventore. Consequatur culpa, reprehenderit excepturi minus ratione incidunt temporibus voluptates fugit sed rem ullam quas voluptate sequi eaque provident tempore.",
        instructor: "Etienne Jeanny",
        announcement: [
            {
                id: 1,
                creator: "Etienne Jeanny",
                content:
                    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio mollitia voluptate minima earum, architecto magnam corporis minus ipsam, alias quisquam nostrum quam natus vero provident deleniti, est fugit? Impedit, mollitia!",
                date: "01/01/2020",
            },
            {
                id: 2,
                creator: "Etienne Jeanny",
                content:
                    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio mollitia voluptate minima earum, architecto magnam corporis minus ipsam, alias quisquam nostrum quam natus vero provident deleniti, est fugit? Impedit, mollitia!",
                date: " 01/05/2020",
            },
        ],
        mainImgUrl: "https://www.etiennejeanny.ovh/uploads/images/mainImg.png",
    },
];

export default function Course() {
    return (
        <div>
            <CourseComponent
                spacing={3}
                video={DUMMY_VIDEO}
                soft='course'
                isCourse={true}
                action={["Edit", "Delete"]}
            />
            <Link to='/dokmee-univeristy/courses/add'>
                <Tooltip title='Add'>
                    <Fab aria-label='add' className='fab-btn'>
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </Link>
        </div>
    );
}
