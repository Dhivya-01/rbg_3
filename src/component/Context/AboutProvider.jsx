/* eslint-disable react/prop-types */
import { AboutContext } from "./Context";
import { advisory, research, practitioner, Executives } from "../About/members";

export default function AboutProvider({ children }) {
  const members = [
    {
      title: "Advisory Board",
      data: advisory,
      content:
        "An elite team of industry and technology experts with 30+ years of experience, guiding our vision with deep insight and foresigh",
    },
    {
      title: "Executives",
      data: Executives,
      content: "",
    },
    {
      title: "Research Executives",
      data: research,
      content: "",
    },

    // { title: "members", data: members },
  ];
  const Practitioner = {
    title: "practitioner",
    data: practitioner,
    content: "",
  };

  const value = { members, Practitioner };
  return (
    <AboutContext.Provider value={value}>{children}</AboutContext.Provider>
  );
}
