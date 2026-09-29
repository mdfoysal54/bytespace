export type Course = {
  title: string;
  category: string;
  instructor: string;
  rating: number;
  students: string;
  price: string;
  image: string;
  featured?: boolean;
};

export const courses: Course[] = [
  {
    title: "Modern UI/UX Design",
    category: "Design",
    instructor: "Maya Rahman",
    rating: 4.9,
    students: "2.4k",
    price: "$24",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=85",
    featured: true,
  },
  {
    title: "Data Analysis with Python",
    category: "Data",
    instructor: "Arif Hasan",
    rating: 4.8,
    students: "1.8k",
    price: "$29",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Build Better Web Apps",
    category: "Development",
    instructor: "Nadia Karim",
    rating: 4.9,
    students: "3.1k",
    price: "$32",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Digital Marketing Essentials",
    category: "Marketing",
    instructor: "Sami Ahmed",
    rating: 4.7,
    students: "1.2k",
    price: "$19",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Motion for Product Designers",
    category: "Design",
    instructor: "Rafi Chowdhury",
    rating: 4.9,
    students: "980",
    price: "$27",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Practical Excel & Analytics",
    category: "Business",
    instructor: "Farah Noor",
    rating: 4.8,
    students: "2.0k",
    price: "$21",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
  },
];
