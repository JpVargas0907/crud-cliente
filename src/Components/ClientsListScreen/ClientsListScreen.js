import styled from "styled-components";

export default function ClientsListScreen(){
    return(
        <>
            <Container>
                <ClientsListContainer>
                    <h1>Hello new job</h1>
                </ClientsListContainer>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #DCDCDC;
`

const ClientsListContainer = styled.div`
    width: 90%;
    height: 80%;
    background-color: #FFFFFF;
    box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px;
    border-radius: 5px;
`


function NewClientButon(){
    return(
        <>
        </>
    )
}