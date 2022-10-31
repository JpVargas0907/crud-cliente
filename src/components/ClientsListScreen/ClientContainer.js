import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function ClientContainer(props){
    const { setAlterScreenStatus, setId } = useContext(UserContext);
    const { id, name } = props;

    function openAlterScreen(){
        setAlterScreenStatus(true);
        setId(id);
    }

    return(
        <Container>
            <ClientInfo>
                <p><b>id:</b> {id}</p>
                <p><b>nome:</b> {name}</p>
            </ClientInfo>
            <Buttons>
                <ion-icon onClick={openAlterScreen} name="create-outline"></ion-icon>
                <ion-icon name="trash-outline"></ion-icon>
            </Buttons>
        </Container>
    )
}

const Container = styled.div`
    height: 80px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
    box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        font-size: larger;
        margin: 4px;
    }

    ion-icon{
        width: 28px;
        height: 24px;
        cursor: pointer;
    }
`

const ClientInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const Buttons = styled.div`
    display: flex;
`