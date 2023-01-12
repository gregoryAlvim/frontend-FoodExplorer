import { useNavigate } from 'react-router-dom';
import { FiCircle } from 'react-icons/fi';

import { HeaderComponent } from '../../components/Header';
import { TextButtonComponent } from '../../components/TextButton';
import { SubTitleComponent } from '../../components/SubTitle';
import { FooterComponent } from '../../components/Footer';

import { MainContainer, MainRequestsContainer, Table, THead, TBody, Tr, Th, Td } from './styles';

export function PurchaseRequests() {

   const navigate = useNavigate();

   function handleComebackToPreviousPage() {
      navigate("/");
   }

   return (
      <MainContainer>
         <HeaderComponent />

         <TextButtonComponent onClick={handleComebackToPreviousPage} className="backButton">{"< voltar"}</TextButtonComponent>

         <MainRequestsContainer>
            <SubTitleComponent className='titlePage'>Pedidos</SubTitleComponent>

            <Table>
               <THead>
                  <Tr>
                     <Th>Status</Th>
                     <Th>Código</Th>
                     <Th>Detalhamento</Th>
                     <Th>Data e hora</Th>
                  </Tr>
               </THead>
               <TBody>
                  <Tr>
                     <Td className='requestStatus'><FiCircle size={10} color="red" fill="red" /> Pendente</Td>
                     <Td>{Math.floor(Math.random() * 10000)}</Td>
                     <Td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</Td>
                     <Td>20/05 às 18h00</Td>
                  </Tr>
                  <Tr>
                     <Td className='requestStatus'><FiCircle size={10} color="yellow" fill="yellow" /> Preparando</Td>
                     <Td>{Math.floor(Math.random() * 10000)}</Td>
                     <Td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</Td>
                     <Td>20/05 às 18h00</Td>
                  </Tr>
                  <Tr>
                     <Td className='requestStatus'><FiCircle size={10} color="green" fill="green" /> Entregue</Td>
                     <Td>{Math.floor(Math.random() * 10000)}</Td>
                     <Td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</Td>
                     <Td>20/05 às 18h00</Td>
                  </Tr>
               </TBody>
            </Table>
         </MainRequestsContainer>
         
         <FooterComponent />
      </MainContainer>
   );
}