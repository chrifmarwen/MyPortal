import React, { Component } from 'react'
import { Badge } from 'react-bootstrap'

class Section extends Component {
  constructor (props) {
    super(props)

    this.sections = [
      {
        image: 'img/01.jpg',
        title: 'Software engineering',
        content: `
          As a software engineer, i've learned from all of my experiences how
          to 'think as an engineer', divide problems into small simple pieces then 
          propose the best solution that fit well into the functional and technical context.
        `,
        skills: [
          'Analyze, Design and Implement',
          'Troubleshooting',
          'Problems analyzes and solving',
          'Optimizing the way of working',
          'Scalability',
          'Design Patterns'
        ]
      },
      {
        image: 'img/Language-for-Web-Dev-Blog-1a.png',
        title: 'Web development',
        content: `
          Based on a good understanding of web technologies and pushing further my limits 
          with my all of my passion for technologies and new methodologies, my day to day concern is to 
          deliver clean code and work on challenging projects.
        `,
        skills: [
          'Clean Code',
          'Javascript (ES5,ES6)',
          'Node.js',
          'React.js', 'Angular',
          'Html', 'Css', 'Scss', 'Less',
          'Sql (Mysql, SqlServer, Postgresql)',
          'PHP', 'Symfony', 'Apache', 'Nginx', 'Linux'
        ]
      },
      {
        image: 'img/téléchargement.png',
        title: 'Robotic Process Automation',
        content: `
          All is about automation ; process digitalizing, implementing new systems and tools, using 
          engines and robots.
          Somehow, as humans the repetitive tasks is always a big limit to our imagination 
          and creativity. And for that reason, i believe that automation is about replacing 'human-engine'
          tasks with human tasks.
        `,
        skills: [
          'BluePrism',
          'Uipath',
          'VB.Net',
          'C#'
        ]
      }
    ]
  }

  render () {
    return this.sections.map((section, index) =>
      <section key={index}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img className="img-fluid rounded-circle" src={section.image} alt=""/>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">{section.title}</h2>
                <p>{section.content}</p>
                <p className="skills-container">{section.skills.map((skill, i) =>
                  <Badge key={i} bsStyle="secondary">{skill}</Badge>
                )}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Section