import React from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CourseVideoComponent from "../../components/CourseVideoComponent";

const DUMMY_VIDEO = [
    {
        testId: 2,
        course: "Introduction",
        slug: "introduction",
        level: "beginner",
        video: [
            {
                sectionName: "Introduction",
                sectionVideo: [
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
                ],
            },
            {
                sectionName: "Setup",
                sectionVideo: [
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
                ],
            },
            {
                sectionName: "Tools Overview",
                sectionVideo: [
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
        question: [
            {
                id: 1,
                creator: "Emilie Brunot",
                content:
                    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio mollitia voluptate minima earum, architecto magnam corporis minus ipsam, alias quisquam nostrum quam natus vero provident deleniti, est fugit? Impedit, mollitia!",
                date: "01/01/2020",
            },
            {
                id: 2,
                creator: "Boris Roy",
                content:
                    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio mollitia voluptate minima earum, architecto magnam corporis minus ipsam, alias quisquam nostrum quam natus vero provident deleniti, est fugit? Impedit, mollitia!",
                date: " 01/05/2020",
            },
        ],
        mainImgUrl: "https://www.etiennejeanny.ovh/uploads/images/mainImg.png",
        courseOver: true,
        test: [
            {
                id: 1,
                question: "What does OCR means",
                answer: [
                    {
                        text: "Optical character recognition",
                        answer: true,
                    },
                    {
                        text: "I am a wrong answer",
                        answer: false,
                    },
                    {
                        text: "Me too !",
                        answer: false,
                    },
                ],
            },
            {
                id: 2,
                question: "What does OMR means",
                answer: [
                    {
                        text: "Optical character recognition",
                        answer: false,
                    },
                    {
                        text: "I am a wrong answer",
                        answer: false,
                    },
                    {
                        text: "Optical mark recognition",
                        answer: true,
                    },
                    {
                        text: "Me too !",
                        answer: false,
                    },
                ],
            },
        ],
    },

    {
        testId: 1,
        course: "Advance",
        slug: "advance",
        level: "advance",
        video: [
            {
                sectionName: "Introduction",
                sectionVideo: [
                    {
                        id: 1,
                        slug: "Installation",
                    },
                    {
                        id: 2,
                        slug: "Batch Profile",
                    },
                    {
                        id: 3,
                        slug: "Zone Recognition",
                    },
                    {
                        id: 4,
                        slug: "Batch Directory",
                    },
                    {
                        id: 5,
                        slug: "Export Module",
                    },
                ],
            },
            {
                sectionName: "Setup",
                sectionVideo: [
                    {
                        id: 6,
                        slug: "Scripts",
                    },
                    {
                        id: 7,
                        slug: "Active Import",
                    },
                    {
                        id: 8,
                        slug: "Database Validation",
                    },
                    {
                        id: 9,
                        slug: "Separation",
                    },
                    {
                        id: 10,
                        slug: "OMR Template",
                    },
                    {
                        id: 11,
                        slug: " Auto Processing",
                    },
                    {
                        id: 12,
                        slug: "Magic Indexing",
                    },
                ],
            },
            {
                sectionName: "Tools Overview",
                sectionVideo: [
                    {
                        id: 13,
                        slug: "Module Overview",
                    },
                    {
                        id: 14,
                        slug: "Reporting Tool",
                    },
                    {
                        id: 15,
                        slug: "User Admin",
                    },
                ],
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
        question: [
            {
                id: 1,
                creator: "Emilie Brunot",
                content:
                    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio mollitia voluptate minima earum, architecto magnam corporis minus ipsam, alias quisquam nostrum quam natus vero provident deleniti, est fugit? Impedit, mollitia!",
                date: "01/01/2020",
            },
            {
                id: 2,
                creator: "Boris Roy",
                content:
                    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio mollitia voluptate minima earum, architecto magnam corporis minus ipsam, alias quisquam nostrum quam natus vero provident deleniti, est fugit? Impedit, mollitia!",
                date: " 01/05/2020",
            },
        ],
        mainImgUrl: "https://www.etiennejeanny.ovh/uploads/images/mainImg.png",
        courseOver: true,
        test: [
            {
                id: 1,
                question: "What does OCR means",
                answer: [
                    {
                        text: "Optical character recognition",
                        answer: true,
                    },
                    {
                        text: "I am a wrong answer",
                        answer: false,
                    },
                    {
                        text: "Me too !",
                        answer: false,
                    },
                ],
            },
            {
                id: 2,
                question: "What does OMR means",
                answer: [
                    {
                        text: "Optical character recognition",
                        answer: false,
                    },
                    {
                        text: "I am a wrong answer",
                        answer: false,
                    },
                    {
                        text: "Optical mark recognition",
                        answer: true,
                    },
                    {
                        text: "Me too !",
                        answer: false,
                    },
                ],
            },
        ],
    },
];

export default function DokmeeCaptureSingleVideo() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const slug = useParams().courseSlug;
    const videoId = useParams().videoId;
    const course = DUMMY_VIDEO.find(p => p.slug === slug);
    return (
        <CourseVideoComponent
            videoId={videoId}
            matches={matches}
            soft='capture'
            course={course}
            slug={slug}
            soft='dokmee-ecm'
            tabs={["Course Description", "Q&A", "Announcement"]}
        />
    );
}
