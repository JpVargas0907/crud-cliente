import styled from 'styled-components';
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function AlterClientScreen(){

    const { alterScreenStatus, setAlterScreenStatus } = useContext(UserContext);

    function closeAlterStatus(){
        setAlterScreenStatus(false);
    }

    return(
        <Content alterScreenStatus={alterScreenStatus}>
            <AlterClientForm>
                <Form>
                    <Titlle>Alterar o Nome do Cliente</Titlle>
                    <input 
                        type="text"
                        placeholder=" Digite o nome do cliente"
                    />

                    <div>
                        <p onClick={closeAlterStatus}>Cancelar</p>
                        <button>Confirmar Alteração</button>
                    </div>
                </Form>
            </AlterClientForm>
        </Content>
    )
}

const Content = styled.div`
    display: ${props => props.alterScreenStatus ? "block" : "none"};
    top: 0px;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: #F6F4F6CC 0% 0% no-repeat padding-box;
    opacity: 1;
    z-index: 1;
`
const AlterClientForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 40vw;
    height: 100vh;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    right: 0px;
    top: 0px;
    z-index: 1;

    @media (max-width: 600px) {
        width: 100vw;
    }
`

const Titlle = styled.p`
    margin: 100px 0px 40px 0px;
    display: flex;
    align-items: center;
    font-size: 32px;
    color: #2D78EB;

    @media (max-width: 600px) {
        font-size: 24px;
    }
`   

const Form = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;

    input{
        height: 40px;
        border: 1px solid #B9B9B9;
        border-radius: 8px;
        margin-bottom: 20px;
        padding: 10px;
    }

    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
    }

    p{
        margin-right: 20px;
        color: #2D78EB;
        cursor: pointer;
    }

    button{
        width: 140px;
        height: 48px;
        background: #2D78EB;
        box-shadow: 0px 3px 6px #2D78EB;
        border-radius: 8px;
        border: none;
        letter-spacing: 0px;
        color: #FFFFFF;
        cursor: pointer;
    }
`