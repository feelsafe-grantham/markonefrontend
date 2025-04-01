import { useState, useEffect } from "react";
import { BASE_URL } from "../../utilities/static/varNames";
import { LinkInterface } from "../../types/contentTypes";
const useTestimonialView = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [title, setTitle] = useState<string>("Testimonial");

  const [links, setLinks] = useState<LinkInterface[]>([
    { label: "Alice Johnson | Software Engineer", value: "client1" },
    { label: "Bob Smith | Marketing Specialist", value: "client2" },
    { label: "Charlie Brown | Graphic Designer", value: "client3" },
    { label: "David Lee | Content Writer", value: "client4" },
    { label: "Eve Carter | Data Scientist", value: "client5" },
    { label: "Frank Turner | Product Manager", value: "client6" },
    { label: "Grace Williams | Photographer", value: "client7" },
    { label: "Henry Jackson | Web Developer", value: "client8" },
    { label: "Isabel Scott | UI/UX Designer", value: "client9" },
    { label: "Jack Davis | SEO Specialist", value: "client10" },
    { label: "Kathy Thomas | Business Consultant", value: "client11" },
    { label: "Leo Martinez | Sales Executive", value: "client12" },
  ]);

  const [selectedClient, setSelectedClient] = useState<number>(0);

  const [testimonial, setTestimonial] = useState([
    {
      client_image: "/images/user.jpg",
      client_name: "Alice Johnson",
      client_segment: "Software Engineer",
      stars: 5,
      images: [
        "/images/project2.png",
        "/images/project1.png",
        "/images/project4.png",
      ],
    },
    {
      client_image: "/images/user.jpg",
      client_name: "Bob Smith",
      client_segment: "Marketing Specialist",
      stars: 3,
      images: [
        "/images/project4.png",
        "/images/project1.png",
        "/images/project2.png",
      ],
    },
    {
      client_image: "/images/user.jpg",
      client_name: "Charlie Brown",
      client_segment: "Graphic Designer",
      stars: 4,
      images: [
        "/images/project2.png",
        "/images/project4.png",
        "/images/project1.png",
      ],
    },
    {
      client_image: "/images/user.jpg",
      client_name: "David Lee",
      client_segment: "Content Writer",
      stars: 5,
      images: [
        "/images/project4.png",
        "/images/project2.png",
        "/images/project1.png",
      ],
    },
    {
      client_image: "/images/user.jpg",
      client_name: "Eve Carter",
      client_segment: "Data Scientist",
      stars: 4,
      images: [
        "/images/project1.png",
        "/images/project4.png",
        "/images/project2.png",
      ],
    },
    {
      client_image: "/images/user.jpg",
      client_name: "Frank Turner",
      client_segment: "Product Manager",
      stars: 5,
      images: [
        "/images/project2.png",
        "/images/project4.png",
        "/images/project1.png",
      ],
    },
    {
      client_image: "/images/user.jpg",
      client_name: "Grace Williams",
      client_segment: "Photographer",
      stars: 3,
      images: [
        "/images/project1.png",
        "/images/project2.png",
        "/images/project4.png",
      ],
    },
    {
      client_image: "/images/user.jpg",
      client_name: "Henry Jackson",
      client_segment: "Web Developer",
      stars: 4,
      images: [
        "/images/project4.png",
        "/images/project1.png",
        "/images/project2.png",
      ],
    },
    {
      client_image: "/images/user.jpg",
      client_name: "Isabel Scott",
      client_segment: "UI/UX Designer",
      stars: 5,
      images: [
        "/images/project1.png",
        "/images/project2.png",
        "/images/project4.png",
      ],
    },
    {
      client_image: "/images/user.jpg",
      client_name: "Jack Davis",
      client_segment: "SEO Specialist",
      stars: 3,
      images: [
        "/images/project2.png",
        "/images/project4.png",
        "/images/project1.png",
      ],
    },
    {
      client_image: "/images/user.jpg",
      client_name: "Kathy Thomas",
      client_segment: "Business Consultant",
      stars: 4,
      images: [
        "/images/project4.png",
        "/images/project1.png",
        "/images/project2.png",
      ],
    },
    {
      client_image: "/images/user.jpg",
      client_name: "Leo Martinez",
      client_segment: "Sales Executive",
      stars: 5,
      images: [
        "/images/project1.png",
        "/images/project4.png",
        "/images/project2.png",
      ],
    },
  ]);
  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL + "get-testimonial/");
      if (!response.ok) {
        throw new Error(`Error fetching blog: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("this is data: ", data.data);
      setTitle("Testimonial");
      setLinks(data.data.link);
      setTestimonial(data.data.testimonials);

      console.log("this is data: ", data.data.testimonials);
    } catch (error) {
      console.error("this is error: ", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    error,
    title,

    testimonial,
    links,
    loading,
    selectedClient,
    setSelectedClient,
  };
};

export default useTestimonialView;
