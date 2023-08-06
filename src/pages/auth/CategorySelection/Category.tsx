import React, { useState } from 'react'
import styled from 'styled-components'


const Data=[
    "Programming",
    "Travel",
    "Tech",
    "Coding",
    "Design",
    "Relationships",
    "Machine Learning",
    "Data Science",
    "Productivity",
    "Politics",
    "Cryptocurrency",
    "Sociology",
    "Psychology",
    "Money",
    "StartUp",
    "Ux",
    "Javascript",
    "Typescript",
    "Education",
    "History",
    "React",
    "LifeStyle",
    "Work",
    "Health",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
]
const Category = () => {

    const [State, setState] = useState(0)

    const onStateChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        const { onclick } = event.target;
        setState(prevCount => (onclick ? prevCount + 1 : prevCount - 1));
    }
  return (
    <div>
        <Container>
            <Main>
                <Logo>LOFO</Logo>

                <Div>
                    <BigText>What are you interested in?</BigText>
                    <SmallText>Choose FIve only</SmallText>
                </Div>

                <Holder
                >
                    {
                        Data.map((props, e:any)=>(
                            <Hold
                            onClick={()=>{
                                onStateChange(e)
                            }}
                            ><Text>{props}</Text><Icon/></Hold>
                        ))
                    }
                </Holder>

                <Div>
                    <Button
                     active={State === 5} disabled={State !== 5}
                    >Continue</Button>
                </Div>
            </Main>
        </Container>
    </div>
  )
}

export default Category
const Button = styled.button<{ active: boolean }>`
  background-color: ${props => (props.active ? 'blue' : 'gray')};
  padding: 10px 20px;
  color: black;
  border: none;
  cursor: ${props => (props.active ? 'pointer' : 'default')};
;
font-size: 25px;
/* margin: 20px; */
`
const Icon = styled.div``
const Text = styled.div`
font-size: 17px;
font-weight: 600;
`
const Hold = styled.div`
padding: 10px 15px;
background-color: silver;
border-radius: 30px;
cursor: pointer;
margin: 20px;


`
const Holder = styled.div`
display: flex;
width: 60%;
flex-wrap: wrap;
justify-content: center;


`
const SmallText = styled.div`
font-size: 20px;
font-weight: 500;
margin: 20px;
`
const BigText = styled.div`
font-size: 30px;
font-weight: 500;
`
const Div = styled.div`
display: flex;
margin-top: 100px;
flex-direction: column;
align-items:center;
`
const Logo = styled.div`
font-size: 60px;
font-weight: 600;
margin-top: 20px;

`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

;
`