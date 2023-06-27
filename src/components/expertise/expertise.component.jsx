import './expertise.styles.scss'
import ExpertiseItem from './expertise-item.component'
import GridWrapper from '../layout/grid-wrapper'



const Expertise = () => {
    const EXPERTISE_DATA = [
        {
          title: "UI/UX Design",
          description: "Passionate about creating captivating UI/UX designs. Strive to bring users' thoughts and needs to life by crafting visually appealing and user-friendly interfaces",
          icon: "uiux-icon"
        },
        {
          title: "Frontend Development",
          description: "Frontend in React, HTML, CSS, and JavaScript, building robust and responsive web applications.",
          icon: "software-dev-icon"
        },
        {
          title: "Expertise",
          description: "With over 1 year of experience, I have been dedicated to creating, developing, and assisting individuals in bringing their ideas to life.",
          icon: "expertise-icon"
        }
      ];
    return(
        <section className='expertise'>
            <h1 className='title--background'>My Expertise</h1>
            <GridWrapper>
            {EXPERTISE_DATA.map((data, index) =><ExpertiseItem key={index} data={data}/> )}
</GridWrapper>
        <h1  className='title--background' >About me</h1>
        </section>

    )
}

export default Expertise