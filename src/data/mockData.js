import DownloadImage from './download.jpeg'
import physicsImage from './biology.jpg'
import picture2 from './physics.jpg'
const experiments = [
    {
        id: 1,
        title: "Experiment 1",
        grade: 1,
        description: "Description for Experiment 1",
        imageURL: DownloadImage, // Base64 encoded image data
    },
    {
        id: 2,
        title: "Experiment 2",
        grade: 2,
        description: "Description for Experiment 2",
        imageURL: physicsImage, // Base64 encoded image data
    },
    {
        id: 3,
        title: "Experiment 3",
        grade: 4,
        description: "Description for Experiment 3",
        imageURL: picture2, // Base64 encoded image data
    },
    {
        id: 4,
        title: "Experiment 4",
        grade: 1,
        description: "Description for Experiment 4",
        imageURL: picture2, // Base64 encoded image data
    },
    {
        id: 5,
        title: "Experiment 5",
        grade: 6,
        description: "Description for Experiment 5",
        imageURL: picture2, // Base64 encoded image data
    },
    // ... more experiments ...
];

export default experiments;
