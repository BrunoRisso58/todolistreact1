import styles from "styled-components";

export const Container = styles.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-itens: center;
    justify-content: space-between;

    .image {
        margin-right: 5px;
    }

    input {
        border: 0px;
        background: transparent;
        outline: 0;
        color: white;
        font-size: 18px;
        flex: 1
    }
`;