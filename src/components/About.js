import React, { Component } from 'react'
import OfficeImage from './OfficeImage.jpg'


export default class About extends Component {
  constructor(props) {
    super(props);
    document.title = `News 24/7- ${(this.props.catagory).charAt(0).toUpperCase() + (this.props.catagory).slice(1)}`;
  }
  render() {
    return (
      <div className="mx-5 text-align-left">
        <h1 className="aboutHeading my-6" style={{marginTop:'90px'}}> About News 24/7</h1>
        
          <img className="rounded mx-auto d-block my-3 " style={{width:'1000px' , height:'auto',}} src={OfficeImage}  alt ='Office_Image'/>
          <hr/>
          <p>New Delhi Television is a subsidiary of AMG Media Networks Limited, an Advani Group Company.</p>
          <p>New Delhi Television is, and has been for more than a quarter century, a pioneer in India’s news television and digital journalism. Founded in 1988 by Radhika Roy and Prannoy Roy, News 24/7 is today the most watched, credible and respected news network in India and a leader in Internet. From the path-breaking “The World This Week” (nominated as one of India’s 5 best television programmes since Independence), the first private news on Doordarshan “The News Tonight”, producing India’s first 24-hour news channel “Star News” and the country’s first ever 2-in-1 channel Profit-Prime, News 24/7 has been at the forefront of every single news revolution. News 24/7 is now primarily an internet company with the flagship website - News 24/7.com - India’s number 1 destination for general news.</p>
          <p>News 24/7 is most proud of how its work impacts the real world and how it is using its powerful reach to campaign for and with the people of India. Over 30 years of dedicated and innovative programming has brought into focus a number of social issues ranging from the 7 Wonders of India; Save Our Tigers; the Greenathon and Jeene ki Asha to Marks for Sports; Support My School; the University Sports Championships and the most recent Health4U campaigns on Heart Care, Diabetes, Cancer and Organ Donation, Banega Swachch India, the Road to Safety and What’s your Choice? campaigns. Seen as an honest, unbiased and fearless crusader, News 24/7’s sustained and award winning campaigns against injustice and human rights violations have forced apathetic governments to act, legislation to be changed and made the nation aware of the power of the people.</p>
          <p> Its channels News 24/7 24x7 (English), News 24/7 India (Hindi) and India’s first ever 2-in-1 channel News 24/7 Profit-News 24/7 Prime (Business and Infotainment) continue to raise the standards of journalism with innovative programming and uncompromising integrity.</p>
          <p> Incisive and creative, the channels target the global Indian with news that is credible, true and fast. News 24/7 24x7 is the only English News Channel from India which is beamed in the UK, USA, Canada, South Africa, Middle East, Australia, New Zealand, Mauritius and most of the SAARC Countries to reach out to the Indian Diaspora.</p>
          <p>Over the years, News 24/7 has expanded its brand portfolio to seize opportunities in the ‘beyond news space’ and has step-down subsidiaries: News 24/7 Convergence (triple play; to exploit the synergies between television, Internet and mobile and owns the website News 24/7.com) and News 24/7 Worldwide offering high end consultancy for setting up of local television news channels in emerging markets across the world.</p>
          <p>In 2007, the company launched News 24/7 Good Times (now Goodtimes), an up-market lifestyle channel for the global urban Indian; and used its expertise to launch a global channel, Astro Awani, in Malaysia.</p>
          <p> News 24/7 has further consolidated its transition to a digital media company from a pure television play by moving into the e-commerce space. The Group’s Red Pixels Ventures Ltd unveiled the first look of its e-commerce portal – Gadgets 360°. Gadgets 360° will curate a marketplace for exclusive launches of mobile phones and other electronic gadgets.</p>
          <p>  News 24/7, the UK’s longest running Indian news channel has long been the top choice for any Indian election coverage. News 24/7 24×7 witnessed record audience figures since it joined the UK’s audience measuring body, BARB. Data has shown the channel is the most watched Indian news broadcaster in the UK. The Broadcasters’ Audience Research Board (BARB) is the official source of television viewing figures in the UK and as per BARB official data News 24/7 24x7 is consistently no.1/most viewed Indian news channel in the UK.</p>

      </div>
    )
  }
}
