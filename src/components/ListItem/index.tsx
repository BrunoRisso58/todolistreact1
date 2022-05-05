import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import Delete from './../../shared/delete.svg';

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void
    onClick: (id: number) => void
}

export const ListItem = ({ item, onChange, onClick }: Props) => {
    return (
        <C.Container done={item.done}>
            <input
                type="checkbox"
                checked={item.done}
                onChange={e => onChange(item.id, e.target.checked) }
            />
            <img 
                src={Delete}
                id="delete_task" 
                width="15px" 
                alt="Botão de deletar a tarefa"
                onClick={() => onClick(item.id)}
            />
            <label>{item.name}</label>
        </C.Container>
    )
}