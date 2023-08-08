import React from 'react'
import styled from 'styled-components'

const HomePage = () => {
    return (
        <div>
            <Container>
                <Main>
                  
HOME

                </Main>
            </Container>
        </div>
    )
}

export default HomePage

const Text   = styled.div`
padding-left: 10px
`

const Main = styled.div`
width: 90%;
height: 90vh;
justify-content: center;
align-items: center;
display: flex;
`

const Container = styled.div`
width: 100%;
min-height: 70vh;
/* display: flex; */
/* justify-content: center;
align-items: center; */
background-color: red;

`