import "./expertise.styles.scss";

import ExpertiseItem from "./expertise-item.component";

const Expertise = () => {
  const EXPERTISE_DATA = [
    { title: "", description: "", icon: "" },
   { title: "", description: "", icon: "" },
   { title: "", description: "", icon: "" },
  ];
  return EXPERTISE_DATA.map((expertiseData, index) => <ExpertiseItem key={index} data={expertiseData}/>);
};

export default Expertise;
