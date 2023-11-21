import './Select.css'
import "@fontsource/poppins";
import React, { useState } from 'react';
import Modal from 'react-modal';
import Person from './cards/Person';
import photo from '../../../assets/photo-sats.png'
import minibig from '../../../assets/minibig.png'
import sats from '../../../assets/sats.jpg'
import mentors from '../../../assets/persons.png'
import conor from '../../../assets/photos-persons/conor.png'
import calle from '../../../assets/photos-persons/calle.png'
import jao from '../../../assets/photos-persons/jao.png'
import hazel from '../../../assets/photos-persons/hazel.png'


export default function AboutUsComponent() {

    // const [modalIsOpenMentors, setModalIsOpenMentors] = useState(false);
    // const [modalIsOpenOrganizers, setModalIsOpenOrganizers] = useState(false);

    // const openModalOrganizers = () => {
    //     setModalIsOpenOrganizers(true);
    // };

    // const closeModalOrganizers = () => {
    //     setModalIsOpenOrganizers(false);
    // };

    // const openModalMentors = () => {
    //     setModalIsOpenMentors(true);
    // };

    // const closeModalMentors = () => {
    //     setModalIsOpenMentors(false);
    // };

    return (
        <div className='containerabout'>
            <div className='containeroptions'>
                <div className='cardoptions'>
                    <div className='cardorganize'>
                        <p className='cardp'>ABOUT US</p>
                        <h2 className='cardh2'>MINIMAXIS</h2>
                        <img src={minibig} id='photowinners' />
                        <p className='cardpp'>Minimaxis was born to facilitate bitcoin smart contracts,<br></br> as they are the new frontier to be overcome and democratized<br></br>  and I hope that we will be able to overcome this barrier.</p>
                    </div>
                </div>

                <div className='cardoptions'>
                    <div className='cardorganize'>
                        <p className='cardp'>SATSHACK</p>
                        <h2 className='cardh2'>WINNERS</h2>
                        <img src={photo} id='photowinners' />
                        <p className='cardpp'>We won the Satshack hackathon at the biggest bitcoin <br></br>event in Brazil, SatsConf!</p>
                    </div>
                </div>
            </div>

            {/* <Modal
                isOpen={modalIsOpenOrganizers}
                onRequestClose={closeModalOrganizers}
                overlayClassName="custom-modal-overlay"
                className="custom-modal-content"
            >
                <div className='containersupermodal'>
                    <div className='containermodal'>
                        <div>
                            <p className='cardptwo'>SATSHACK</p>
                            <h2 className='cardh2'>ORGANIZERS</h2>
                            <p className='cardpptwo'>We thank all the organizers which gave us the <br></br>opportunity to participate in SatsHack</p>
                        </div>

                        <img src={mentors} className='imgmodal' />
                    </div>

                    <div className='containerpersons'>
                        <Person
                            imgSrc={hazel}
                            name=" Luciana Ferreira"
                            subtitle="Vinteum"
                        />

                    </div>

                    <button onClick={closeModalOrganizers} className='cardbutton'>Back</button>
                </div>
            </Modal>

            <Modal
                isOpen={modalIsOpenMentors}
                onRequestClose={closeModalMentors}
                overlayClassName="custom-modal-overlay"
                className="custom-modal-content"
            >
                <div className='containersupermodal'>
                    <div className='containermodal'>
                        <div>
                            <p className='cardptwo'>SATSHACK</p>
                            <h2 className='cardh2'>MENTORS</h2>
                            <p className='cardpptwo'>We are grateful to all the mentors <br></br>who helped validate our idea;<br></br> without them, MiniMaxis would not be possible.</p>
                        </div>

                        <img src={mentors} className='imgmodal' />
                    </div>

                    <div className='containerpersons'>
                        <Person
                            imgSrc={conor}
                            name="Conor"
                            subtitle="Spiral"
                        />

                        <Person
                            imgSrc={calle}
                            name="Calle"
                            subtitle="LN Bits | Cashu"
                        />

                        <Person
                            imgSrc={jao}
                            name="Jaonoctus"
                            subtitle="CometCash"
                        />
                    </div>

                    <button onClick={closeModalMentors} className='cardbutton'>Back</button>
                </div>
            </Modal> */}

            {/* <div className='containeroptions'>

                <div className='cardoptions'>
                    <div className='cardorganize'>
                        <p className='cardp'>SATSHACK</p>
                        <h2 className='cardh2'>ORGANIZERS</h2>
                        <img src={sats} className='imgdocs' />
                        <p className='cardpp'>Thank you to all satshack organizers <br></br>event in Brazil, SatsConf!</p>
                        <button className='cardbutton' onClick={openModalOrganizers}>Organizers</button>
                    </div>
                </div>

                <div className='cardoptions'>
                    <div className='cardorganize'>
                        <p className='cardp'>ACKNOWLEDGMENTS</p>
                        <h2 className='cardh2'>MENTORS</h2>
                        <img src={sats} className='imgdocs' />
                        <p className='cardpp'>Our team thanks all the mentors who helped us <br></br>on this journey.</p>
                        <button className='cardbutton' onClick={openModalMentors}>Mentors</button>
                    </div>
                </div>


            </div> */}
        </div>
    )
};

