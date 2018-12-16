import React, { Component } from 'react'

class Section extends Component {

  constructor (props) {
    super(props)

    this.sections = [
      {
        image: 'img/01.jpg',
        title: 'Marwen Cherif',
        content: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          aliquid, mollitia odio veniam sit iste esse assumenda amet
          aperiam exercitationem, ea animi blanditiis recusandae! Ratione
          voluptatum molestiae adipisci, beatae obcaecati.
        `
      },
      {
        image: 'img/02.jpg',
        title: 'We salute you!',
        content: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          aliquid, mollitia odio veniam sit iste esse assumenda amet
          aperiam exercitationem, ea animi blanditiis recusandae! Ratione
          voluptatum molestiae adipisci, beatae obcaecati.
        `
      },
      {
        image: 'img/03.jpg',
        title: 'Let there be rock!',
        content: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          aliquid, mollitia odio veniam sit iste esse assumenda amet
          aperiam exercitationem, ea animi blanditiis recusandae! Ratione
          voluptatum molestiae adipisci, beatae obcaecati.
        `
      }
    ]
  }

  render () {
    return [
      <div className="padding-top"></div>,
      this.sections.map((section, index) =>
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
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    ]
  }
}

export default Section