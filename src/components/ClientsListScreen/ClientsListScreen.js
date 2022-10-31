import styled from "styled-components";
import ClientContainer from "./ClientContainer";

export default function ClientsListScreen(){
    return(
        <>
            <Container>
                <ClientsListContainer>
                    <ListContainerHeader>
                        <h1>Lista de Clientes</h1>
                        <NewClientButton />
                    </ListContainerHeader>

                    <ClientContainer />
                    <ClientContainer />
                    <ClientContainer />
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
    border-radius: 5px;
`
const ListContainerHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h1{
        font-size: 22px;
    }
`


function NewClientButton(){
    return(
        <ButtonContainer>Adicionar</ButtonContainer>
    )
}

const ButtonContainer = styled.button`
    width: 180px;
    height: 40px;
    padding: 10px;
    background: #2D78EB;
    color: #FFFFFF;
    border-style: none;
    border-radius: 5px;
    box-shadow: 0px 3px 6px #2D78EB;
    font-size: 20px;
    cursor: pointer;
`   