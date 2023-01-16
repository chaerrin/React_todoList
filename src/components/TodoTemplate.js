import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    width: 480px;
    height: 720px;

    position: relative;
    background: white;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 5%;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    position: relative;
    `;

    function TodoTemplate({ children }) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
