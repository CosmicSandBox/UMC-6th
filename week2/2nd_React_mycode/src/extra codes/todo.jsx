import styled from "styled-components";

function ToDo () {
    


    return (
        <Container>
            <Wrapper>
                <h2>UMC Study Plan</h2>
            <Board>
            <Form>
                <Input type="text" placeholder="Todo를 입력하세요" />
                <input type="submit" style={{ display: 'none' }} />
            </Form>
                <Lists>
                    <Titles>
                        <H4>해야 할 일</H4>
                        <H4>해낸 일</H4>
                    </Titles>
                    <Plate>
                        <Todos/>
                        <Dones/>
                    </Plate>
                </Lists>
            </Board>
            </Wrapper>
        </Container>

    )
}

export default ToDo;

const Container = styled.div`
        margin: 0;
    height: 100vh;
    background-color: #ffb677;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
        background-color: rgba(255, 255, 255, 0.7);
    width: 800px;
    min-height: 760px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px 50px;
`;

const Board = styled.div `
        border-top: 2px solid #c76e21;
    padding: 20px 0px;
    width: 90%;
    min-height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Lists = styled.div`
        width: 700px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-around;
`;

const Titles = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const Plate = styled.div`    
    width: 700px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`;

const Todos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Dones = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #c76e21;
    padding-bottom: 3px;
`;


const TodoNodes = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  text-align: center;
`;

const Input = styled.input`
  width: 90%;
  height: 50px;
  border: none;
  font-size: 15px;
  padding-left: 5px;
`;

const H4 = styled.h4`
  width: 100px;
  border-bottom: 2px solid #c76e21;
  text-align: center;
`;

const Button = styled.button`
  background-color: #c76e21;
  border: none;
  width: 40px;
  height: 30px;
  cursor: pointer;
`;
