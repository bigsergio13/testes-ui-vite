import React, { useContext } from 'react';
import Context from '../../contexts/ContextForm';

import * as Dialog from '@radix-ui/react-dialog';

import CardAdd from '../CardAdd';
import { CloseButton, DialogContent, DialogOverlay } from './styles';

const Form = () => {
  const {tasks, setTasks} = useContext(Context)


  const handleSubmit = (event: React.FormEvent<HTMLFormElement | any>) => {
    event.preventDefault()
    const newTask = {
      id: Math.random().toString(),
      company: event.currentTarget[0].value,
      type: 'Carrossel',
      // dateDelivery: event.currentTarget[1].value
      dateDelivery: 'Sex, 24/01'
    }
    setTasks([...tasks, newTask])
    event.currentTarget.reset()
    console.log(tasks)
  }

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div>
            <CardAdd />
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay asChild>
            <DialogOverlay>
              <Dialog.Content asChild>
                <DialogContent>
                <Dialog.Title>Nova demanda</Dialog.Title>
                  <Dialog.Close asChild>
                  </Dialog.Close>
                  <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Company' required/>
                    <select>
                      <option value="none" disabled>Selecione o tipo</option>
                      <option value="Arte">Arte</option>
                      <option value="Carrossel">Carrossel</option>
                      <option value="Outros">Outros</option>
                    </select>
                    <input type="date"/>
                    <textarea placeholder='Descrição'rows={5}/>
                    <button type="submit">Adicionar</button>
                    <CloseButton>
                      Cancelar
                    </CloseButton>
                  </form>
                </DialogContent>
              </Dialog.Content>
            </DialogOverlay>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default Form;