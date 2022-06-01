import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
    image:
      "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWRib2FyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description: "All the items combined",
  },
  {
    _id: uuid(),
    categoryName: "Arduino",
    image:
      "https://images.unsplash.com/photo-1557855506-3619a44bab73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXJkdWlub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Arduino is a popular microcontroller board used by engineers develop various robots projects.",
  },
  {
    _id: uuid(),
    categoryName: "Sensor",
    image:
      "https://images.pexels.com/photos/9028878/pexels-photo-9028878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: " Without sensor, a robot is, in essence, blind and deaf.",
  },
  {
    _id: uuid(),
    categoryName: "Breadboard",
    image:
      "https://images.unsplash.com/photo-1649959265040-2b87be9074e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJyZWFkYm9hcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    description:
      "Breadboards are one of the most fundamental pieces when learning how to build circuits",
  },
  {
    _id: uuid(),
    categoryName: "RasberryPie",
    image:
      "https://images.unsplash.com/photo-1631553126875-88a6f19b90c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhc3BiZXJyeSUyMHBpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "The Raspberry Pi 4 is a tiny, cheap Linux computer that you can use for a huge range of fun and useful projects",
  },
  {
    _id: uuid(),
    categoryName: "Wheels",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/1/DP/RY/DG/44302309/mecanum-wheels-500x500.jpg",
    description:
      "Wheeled robots are robots that navigate around the ground using motorized wheels to propel themselves.",
  },
];
