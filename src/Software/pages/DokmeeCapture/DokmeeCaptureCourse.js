import React from "react";
import { useParams } from "react-router-dom";
import CourseContentComponent from "../../components/CourseContentComponent";

const DUMMY_VIDEO = [
    {
        course: "Introduction",
        slug: "introduction",
        level: "beginner",
        video: [
            {
                id: 1,
                slug: "Installation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 2,
                slug: "Batch Profile",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 3,
                slug: "Zone Recognition",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 4,
                slug: "Batch Directory",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 5,
                slug: "Export Module",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 6,
                slug: "Scripts",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 7,
                slug: "Active Import",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 8,
                slug: "Database Validation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 9,
                slug: "Separation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 10,
                slug: "OMR Template",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 11,
                slug: " Auto Processing",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 12,
                slug: "Magic Indexing",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 13,
                slug: "Module Overview",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 14,
                slug: "Reporting Tool",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 15,
                slug: "User Admin",
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

    {
        course: "Advance",
        slug: "advance",
        level: "advance",
        video: [
            {
                id: 1,
                slug: "Installation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 2,
                slug: "Batch Profile",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 3,
                slug: "Zone Recognition",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 4,
                slug: "Batch Directory",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 5,
                slug: "Export Module",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 6,
                slug: "Scripts",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 7,
                slug: "Active Import",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 8,
                slug: "Database Validation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 9,
                slug: "Separation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 10,
                slug: "OMR Template",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 11,
                slug: " Auto Processing",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 12,
                slug: "Magic Indexing",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 13,
                slug: "Module Overview",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 14,
                slug: "Reporting Tool",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 15,
                slug: "User Admin",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
        ],
        about:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ea sequi dolorum quam? Alias quaerat cum aperiam magni provident molestias.",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nulla facere voluptates non illo a ducimus cupiditate dolorem odio qui, atque explicabo accusantium. Amet, totam, rem distinctio dicta praesentium alias eveniet maiores quisquam officia ipsam nesciunt aliquam, sapiente commodi nam impedit eum maxime sint quis consectetur explicabo. Facilis suscipit esse nulla placeat, illo, non magnam, illum officiis quidem repellendus modi? Eaque accusantium voluptatibus sequi odit temporibus? Facere cumque sint fugit voluptatem labore hic, a asperiores accusantium doloremque ipsam nisi neque inventore. Consequatur culpa, reprehenderit excepturi minus ratione incidunt temporibus voluptates fugit sed rem ullam quas voluptate sequi eaque provident tempore.",

        Instructor: "Etienne Jeanny",
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
    {
        course: "Introduction",
        slug: "introduction",
        level: "beginner",
        video: [
            {
                id: 1,
                slug: "Installation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 2,
                slug: "Batch Profile",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 3,
                slug: "Zone Recognition",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 4,
                slug: "Batch Directory",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 5,
                slug: "Export Module",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 6,
                slug: "Scripts",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 7,
                slug: "Active Import",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 8,
                slug: "Database Validation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 9,
                slug: "Separation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 10,
                slug: "OMR Template",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 11,
                slug: " Auto Processing",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 12,
                slug: "Magic Indexing",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 13,
                slug: "Module Overview",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 14,
                slug: "Reporting Tool",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 15,
                slug: "User Admin",
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

    {
        course: "Advance",
        slug: "advance",
        level: "advance",
        video: [
            {
                id: 1,
                slug: "Installation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 2,
                slug: "Batch Profile",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 3,
                slug: "Zone Recognition",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 4,
                slug: "Batch Directory",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 5,
                slug: "Export Module",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 6,
                slug: "Scripts",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 7,
                slug: "Active Import",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 8,
                slug: "Database Validation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 9,
                slug: "Separation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 10,
                slug: "OMR Template",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 11,
                slug: " Auto Processing",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 12,
                slug: "Magic Indexing",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 13,
                slug: "Module Overview",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 14,
                slug: "Reporting Tool",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 15,
                slug: "User Admin",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
        ],
        about:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ea sequi dolorum quam? Alias quaerat cum aperiam magni provident molestias.",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nulla facere voluptates non illo a ducimus cupiditate dolorem odio qui, atque explicabo accusantium. Amet, totam, rem distinctio dicta praesentium alias eveniet maiores quisquam officia ipsam nesciunt aliquam, sapiente commodi nam impedit eum maxime sint quis consectetur explicabo. Facilis suscipit esse nulla placeat, illo, non magnam, illum officiis quidem repellendus modi? Eaque accusantium voluptatibus sequi odit temporibus? Facere cumque sint fugit voluptatem labore hic, a asperiores accusantium doloremque ipsam nisi neque inventore. Consequatur culpa, reprehenderit excepturi minus ratione incidunt temporibus voluptates fugit sed rem ullam quas voluptate sequi eaque provident tempore.",

        Instructor: "Etienne Jeanny",
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
    {
        course: "Introduction",
        slug: "introduction",
        level: "beginner",
        video: [
            {
                id: 1,
                slug: "Installation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 2,
                slug: "Batch Profile",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 3,
                slug: "Zone Recognition",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 4,
                slug: "Batch Directory",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 5,
                slug: "Export Module",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 6,
                slug: "Scripts",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 7,
                slug: "Active Import",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 8,
                slug: "Database Validation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 9,
                slug: "Separation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 10,
                slug: "OMR Template",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 11,
                slug: " Auto Processing",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 12,
                slug: "Magic Indexing",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 13,
                slug: "Module Overview",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 14,
                slug: "Reporting Tool",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 15,
                slug: "User Admin",
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

    {
        course: "Advance",
        slug: "advance",
        level: "advance",
        video: [
            {
                id: 1,
                slug: "Installation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 2,
                slug: "Batch Profile",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 3,
                slug: "Zone Recognition",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 4,
                slug: "Batch Directory",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 5,
                slug: "Export Module",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 6,
                slug: "Scripts",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 7,
                slug: "Active Import",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 8,
                slug: "Database Validation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 9,
                slug: "Separation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 10,
                slug: "OMR Template",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 11,
                slug: " Auto Processing",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 12,
                slug: "Magic Indexing",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 13,
                slug: "Module Overview",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 14,
                slug: "Reporting Tool",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 15,
                slug: "User Admin",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
        ],
        about:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ea sequi dolorum quam? Alias quaerat cum aperiam magni provident molestias.",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nulla facere voluptates non illo a ducimus cupiditate dolorem odio qui, atque explicabo accusantium. Amet, totam, rem distinctio dicta praesentium alias eveniet maiores quisquam officia ipsam nesciunt aliquam, sapiente commodi nam impedit eum maxime sint quis consectetur explicabo. Facilis suscipit esse nulla placeat, illo, non magnam, illum officiis quidem repellendus modi? Eaque accusantium voluptatibus sequi odit temporibus? Facere cumque sint fugit voluptatem labore hic, a asperiores accusantium doloremque ipsam nisi neque inventore. Consequatur culpa, reprehenderit excepturi minus ratione incidunt temporibus voluptates fugit sed rem ullam quas voluptate sequi eaque provident tempore.",

        Instructor: "Etienne Jeanny",
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
    {
        course: "Introduction",
        slug: "introduction",
        level: "beginner",
        video: [
            {
                id: 1,
                slug: "Installation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 2,
                slug: "Batch Profile",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 3,
                slug: "Zone Recognition",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 4,
                slug: "Batch Directory",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 5,
                slug: "Export Module",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 6,
                slug: "Scripts",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 7,
                slug: "Active Import",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 8,
                slug: "Database Validation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 9,
                slug: "Separation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 10,
                slug: "OMR Template",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 11,
                slug: " Auto Processing",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 12,
                slug: "Magic Indexing",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 13,
                slug: "Module Overview",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 14,
                slug: "Reporting Tool",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 15,
                slug: "User Admin",
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

    {
        course: "Advance",
        slug: "advance",
        level: "advance",
        video: [
            {
                id: 1,
                slug: "Installation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 2,
                slug: "Batch Profile",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 3,
                slug: "Zone Recognition",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 4,
                slug: "Batch Directory",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 5,
                slug: "Export Module",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 6,
                slug: "Scripts",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 7,
                slug: "Active Import",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 8,
                slug: "Database Validation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 9,
                slug: "Separation",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 10,
                slug: "OMR Template",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 11,
                slug: " Auto Processing",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 12,
                slug: "Magic Indexing",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 13,
                slug: "Module Overview",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 14,
                slug: "Reporting Tool",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 15,
                slug: "User Admin",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
        ],
        about:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ea sequi dolorum quam? Alias quaerat cum aperiam magni provident molestias.",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nulla facere voluptates non illo a ducimus cupiditate dolorem odio qui, atque explicabo accusantium. Amet, totam, rem distinctio dicta praesentium alias eveniet maiores quisquam officia ipsam nesciunt aliquam, sapiente commodi nam impedit eum maxime sint quis consectetur explicabo. Facilis suscipit esse nulla placeat, illo, non magnam, illum officiis quidem repellendus modi? Eaque accusantium voluptatibus sequi odit temporibus? Facere cumque sint fugit voluptatem labore hic, a asperiores accusantium doloremque ipsam nisi neque inventore. Consequatur culpa, reprehenderit excepturi minus ratione incidunt temporibus voluptates fugit sed rem ullam quas voluptate sequi eaque provident tempore.",

        Instructor: "Etienne Jeanny",
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
export default function DokmeeCaptureCourse() {
    const slug = useParams().courseSlug;
    if (slug) {
        const course = DUMMY_VIDEO.find(p => p.slug === slug);
        return (
            <CourseContentComponent
                slug={slug}
                spacing={3}
                video={course.video}
                soft='dokmee-capture'
                img={course.mainImgUrl}
            />
        );
    } else {
        return <h2>Error</h2>;
    }
}
