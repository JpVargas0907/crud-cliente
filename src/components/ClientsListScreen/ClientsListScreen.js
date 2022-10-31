import styled from "styled-components";
import ClientContainer from "../../components/ClientsListScreen/ClientContainer";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function ClientsListScreen(){

    const { setNewClientScreenStatus } = useContext(UserContext);

    return(
        <>
            <Container>
                <ClientsListContainer>
                    <ListContainerHeader>
                        <h1>Lista de Clientes</h1>
                        <NewClientButton setNewClientScreenStatus={setNewClientScreenStatus}/>
                    </ListContainerHeader>

                    <ClientContainer/>
                    <ClientContainer/>
                    <ClientContainer/>
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


function NewClientButton(props){

    const { setNewClientScreenStatus} = props;
    
    function openNewClientScreen(){
        setNewClientScreenStatus(true);
    }   

    return(
        <ButtonContainer onClick={openNewClientScreen}>Adicionar</ButtonContainer>
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