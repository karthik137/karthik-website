import React from "react"
import {Jumbotron, Container} from 'react-bootstrap'
import "./About.css"

const about = () => {
    return (
        <div >

            <Jumbotron fluid className="aboutcontainer">
                <Container>
                    <h1>Fluid jumbotron</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default about