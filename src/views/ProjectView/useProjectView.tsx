import { useState, useEffect } from "react";
import { BASE_URL, Endpoint } from "../../utilities/static/varNames";
import { LinkInterface, ProjectsInterface } from "../../types/contentTypes";
const useProjectView = (endpoint: Endpoint) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [title, setTitle] = useState<string>("Development");
  const [subTitle, setSubTitle] = useState<string>("Projects");
  const [timelinedata, setTimelinedata] = useState<string[]>([
    "Start",
    "Requirement Analysis",
    "Prototype Building",
    "Finilizing Ui/Ux",
    "Setting Timeline",
    "Build Beta Version/Test",
    "Deploy Prod Version",
    "Improvement Phase",
  ]);
  const [projects, setProjects] = useState<ProjectsInterface>({
    ios: [
      { image: "/images/project1.png" },
      { image: "/images/project2.png" },
      { image: "/images/project3.png" },
      { image: "/images/project4.png" },
    ],
    android: [
      { image: "/images/project2.png" },
      { image: "/images/project3.png" },
      { image: "/images/project4.png" },
      { image: "/images/project1.png" },
    ],
    web: [
      { image: "/images/project3.png" },
      { image: "/images/project4.png" },
      { image: "/images/project1.png" },
      { image: "/images/project2.png" },
    ],
  });

  const [links, setLinks] = useState<LinkInterface[]>([
    { label: "IOS App", value: "ios" },
    { label: "Android App", value: "android" },
    { label: "Web App", value: "web" },
    { label: "IOS App", value: "ios" },
    { label: "Android App", value: "android" },
    { label: "Web App", value: "web" },
    { label: "IOS App", value: "ios" },
    { label: "Android App", value: "android" },
    { label: "Web App", value: "web" },
  ]);
  const [selectedType, setSelectedType] = useState<string>("");
  const currentProject = projects[selectedType];

  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL + "get-project/" + endpoint);
      if (!response.ok) {
        throw new Error(`Error fetching blog: ${response.statusText}`);
      }

      const data = await response.json();

      setTitle(data.data.title);
      setSubTitle(data.data.section_heading);
      let tt = data.data.timeline.replace(/'/g, '"');
      setTimelinedata(JSON.parse(tt));
      setLinks(data.data.link);
      setProjects(data.data.projects);
      setSelectedType(Object.keys(data.data.projects)[0]);
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
    subTitle,
    timelinedata,
    links,
    loading,
    setSelectedType,
    currentProject,
  };
};

export default useProjectView;
