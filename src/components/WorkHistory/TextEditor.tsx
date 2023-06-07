import { Editor } from '@tinymce/tinymce-react';
import { observer } from "mobx-react-lite"
import store from '@/store/formStore'

function TextEditor() {
    const { state } = store
    return (
        <>
            <div className='mx-auto max-w-5xl  px-6 lg:px-8'>
                <Editor
                    apiKey={process.env.NEXT_PUBLIC_TINY_TEXT_API}
                    value={state.jobDescription}
                    onEditorChange={(newValue, editor) => state.jobDescription = newValue}
                    init={{
                        height: 350,
                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:12px }'
                    }}
                />
                <div className='py-5'>
                    <button className='button' onClick={() => state.jobDescription = ""}>Clear All</button>
                </div>
            </div>
        </>


    )
}

export default observer(TextEditor)
