import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import Button from './Button';

const QueryEditor = ({ handleChange, handleClick }) => {
    const [code, updateCode] = useState("");

    const handleBtnClick = () => {
        handleChange(code);
        handleClick();
    }

    return <div>
        <Editor
            onValueChange={code => updateCode(code)}
            highlight={() => { }}
            padding={10}
            placeholder="Type query here..."
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                height: "200px",
                border: "1px dashed black"
            }}
        />
        <Button handleClick={handleBtnClick} />
    </div>
}

export default QueryEditor;