import { useContext } from 'react';

import Context, { Task } from '../../contexts/ContextForm';

import Card from '../Card';

import { Container } from './styles';

const CardContainer: any = ({ children}:any) => {
  const { tasks } = useContext(Context)
  return (
    <Container>
      {children}
      {tasks?.map((task: Task) => (
        <Card
          key={task.id}
          id={task.id}
          type={task.type}
          company={task.company}
          dateDelivery={task.dateDelivery}
        />
      ))}
    </Container>
  );
}

export default CardContainer;