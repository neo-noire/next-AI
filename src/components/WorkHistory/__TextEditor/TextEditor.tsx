import '@wangeditor/editor/dist/css/style.css' // import css

import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'

const TextEditor = () => {
    const [editor, setEditor] = useState<IDomEditor | null>(null)
    const [html, setHtml] = useState('<p>hello</p>');

    const toolbarConfig: Partial<IToolbarConfig> = {
        toolbarKeys: [
            'headerSelect',
            '|',
            'bold', 'italic',
            {
                key: 'group-more-style', // required, must start with `group-`
                title: 'more', // required
                iconSvg: '<p>....</p>', // optional
                menuKeys: ["through", "code", "clearStyle"] // required, children menu keys
            },
        ]
    }  // TS syntax
    // const toolbarConfig = { }                        // JS syntax

    const editorConfig: Partial<IEditorConfig> = {  // TS syntax
        // const editorConfig = {                       // JS syntax
        placeholder: 'Type here...',
    }

    // Timely destroy editor, important!
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    return (
        <>
            <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <Editor
                    defaultConfig={editorConfig}
                    // value={data.jobDescription}
                    onCreated={setEditor}
                    onChange={editor => {
                        // setEditor(editor);
                        // dataHandler({ ...data, jobDescription: editor.getHtml() })
                    }}
                    mode="default"
                    style={{ height: '500px', overflowY: 'hidden' }}
                />
            </div>
            <div style={{ marginTop: '15px' }}>
                {html}
            </div>
        </>
    )
}

export default TextEditor