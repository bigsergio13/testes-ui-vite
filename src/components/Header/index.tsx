import React, { useContext } from 'react';

import Context from '../../contexts/ContextForm';

import { Container } from './styles';

const Header: React.FC = () => {
  const { tasksSize } = useContext(Context)
  return (
    <Container>
        <h1>Demandas Tokka</h1>
        <div>
          <p>

          { tasksSize > 1
          ? `Atualmente faltam ${tasksSize} demandas`
          : `Atualmente falta uma demanda`
          }
        </p>
        </div>
        <div>
            <img src="https://adorableavatars.com/avatars/32/abott@itg.png" alt="" />
        </div>
    </Container>
  )
}

export default Header;