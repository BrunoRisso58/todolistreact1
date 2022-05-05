import styled from 'styled-components';

type ContainerProps = {
    done: boolean
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
        display: flex;
        align-items: center;
        background-color: #20212C;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;

        input {
            width: 25px;
            height: 25px;
            margin-right: 5px;
            cursor: pointer;
        }

        label {
            color: #CCC;
            text-decoration: ${done ? 'line-through' : 'initial'}
        }

        #delete_task {
            cursor: pointer;
            padding: 0px 10px
        }
    `
));